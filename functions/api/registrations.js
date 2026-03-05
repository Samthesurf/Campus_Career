export async function onRequestGet(context) {
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

    // 2. Fetch data
    const { results: registrations } = await db.prepare(
      `SELECT * FROM registrations ORDER BY created_at DESC`
    ).all();

    // 3. Compute stats
    const stats = {
      total: registrations.length,
      today: 0,
      uniqueColleges: new Set(),
      byCollege: {},
      byLevel: {},
      byInterest: {},
      byHeardFrom: {}
    };

    const todayStr = new Date().toISOString().split('T')[0];

    registrations.forEach(reg => {
      // Today's registrations
      if (reg.created_at.startsWith(todayStr)) {
        stats.today++;
      }

      // Unique colleges
      stats.uniqueColleges.add(reg.college);

      // Groupings
      stats.byCollege[reg.college] = (stats.byCollege[reg.college] || 0) + 1;
      stats.byLevel[reg.level] = (stats.byLevel[reg.level] || 0) + 1;
      stats.byInterest[reg.interest] = (stats.byInterest[reg.interest] || 0) + 1;
      stats.byHeardFrom[reg.heard_from] = (stats.byHeardFrom[reg.heard_from] || 0) + 1;
    });

    // Format stats for Recharts (array of {name, value} objects)
    const formatForCharts = (obj) => Object.entries(obj).map(([name, value]) => ({ name, value }));

    const chartData = {
      byCollege: formatForCharts(stats.byCollege),
      byLevel: formatForCharts(stats.byLevel),
      byInterest: formatForCharts(stats.byInterest),
      byHeardFrom: formatForCharts(stats.byHeardFrom),
    };

    return new Response(JSON.stringify({
      registrations,
      stats: {
        total: stats.total,
        today: stats.today,
        uniqueCollegesCount: stats.uniqueColleges.size
      },
      chartData
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Fetch registrations error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
