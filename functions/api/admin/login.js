export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();
    
    // Check if the provided password matches the ADMIN_PASSWORD environment variable
    if (!env.ADMIN_PASSWORD || body.password !== env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: 'Invalid password' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Generate a simple token (in a real app, this would be a proper JWT or session token)
    // For this simple use case, we'll just hash the password with a fixed salt
    const tokenData = new TextEncoder().encode(env.ADMIN_PASSWORD + 'campustocareer2.0');
    const hashBuffer = await crypto.subtle.digest('SHA-256', tokenData);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const token = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // Set cookie that expires in 24 hours
    const cookieHeader = `admin_session=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict; Secure`;

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Set-Cookie': cookieHeader
      }
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}