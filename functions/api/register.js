// TODO: Re-enable when an email service is set up
// import { sendConfirmationEmail } from './_email.js';

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const db = env.campustocareer_db || env.DB;

    if (!db) {
      console.error('D1 binding not found. Expected `campustocareer_db` (or legacy `DB`).');
      return new Response(JSON.stringify({ error: 'Server database is not configured.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Parse the JSON request body
    const body = await request.json();

    // Extract fields
    const { email, full_name, college, department, level, interest, heard_from } = body;

    // Validate required fields
    if (!email || !full_name || !college || !department || !level || !interest || !heard_from) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Insert into D1 database
    try {
      const { success } = await db.prepare(
        `INSERT INTO registrations (email, full_name, college, department, level, interest, heard_from)
         VALUES (?, ?, ?, ?, ?, ?, ?)`
      ).bind(email, full_name, college, department, level, interest, heard_from).run();

      if (success) {
        // ─── Email sending (currently disabled) ─────────────────────
        // TODO: Re-enable when an email service is configured.
        // The email template and logic are ready in _email.js.
        //
        // const registrationDetails = { email, college, department, level, interest, heard_from };
        // let emailSent = false;
        // try {
        //   emailSent = await sendConfirmationEmail(env, email, full_name, registrationDetails);
        //   if (emailSent) {
        //     await db.prepare(
        //       `UPDATE registrations SET email_sent = 1 WHERE email = ?`
        //     ).bind(email).run();
        //   }
        // } catch (emailErr) {
        //   console.error('[Email] Error in email flow:', emailErr);
        // }

        return new Response(JSON.stringify({ success: true }), {
          status: 201,
          headers: { 'Content-Type': 'application/json' }
        });
      } else {
        throw new Error('Database insertion failed');
      }
    } catch (dbError) {
      // Check for unique constraint violation (duplicate email)
      if (dbError.message && /UNIQUE constraint failed/i.test(dbError.message)) {
        return new Response(JSON.stringify({ error: 'This email is already registered.' }), {
          status: 409,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      throw dbError;
    }
  } catch (error) {
    console.error('Registration API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
