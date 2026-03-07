export async function onRequestDelete(context) {
  try {
    const { request, env, params } = context;
    const db = env.campustocareer_db || env.DB;
    const id = params.id;

    if (!db) {
      return new Response(JSON.stringify({ error: 'Server database is not configured.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 1. Verify authentication
    const cookieHeader = request.headers.get('Cookie');
    if (!cookieHeader || !cookieHeader.includes('admin_session=')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const cookies = Object.fromEntries(
      cookieHeader.split('; ').map(c => {
        const [key, ...v] = c.split('=');
        return [key, v.join('=')];
      })
    );

    const sessionToken = cookies['admin_session'];
    const tokenData = new TextEncoder().encode(env.ADMIN_PASSWORD + 'campustocareer2.0');
    const hashBuffer = await crypto.subtle.digest('SHA-256', tokenData);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const expectedToken = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    if (sessionToken !== expectedToken) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Delete registration
    const { success } = await db.prepare(
      `DELETE FROM registrations WHERE id = ?`
    ).bind(id).run();

    if (success) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ error: 'Failed to delete registration' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
  } catch (error) {
    console.error('Delete registration error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
