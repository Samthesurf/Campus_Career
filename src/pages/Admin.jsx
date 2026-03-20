import React, { useState, useEffect } from 'react';
import { 
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, 
  CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer 
} from 'recharts';
import './Admin.css';

const COLORS = ['#E8971A', '#5799BA', '#ffd700', '#324F6C', '#8b5cf6', '#fed23f'];

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Check if already authenticated
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/verify');
        if (response.ok) {
          setIsAuthenticated(true);
          fetchData();
        } else {
          setIsLoading(false);
        }
      } catch {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        fetchData();
      } else {
        const result = await response.json();
        setLoginError(result.error || 'Invalid password');
      }
    } catch {
      setLoginError('Error connecting to server');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/registrations');
      if (!response.ok) {
        if (response.status === 401) {
          setIsAuthenticated(false);
          throw new Error('Session expired');
        }
        throw new Error('Failed to fetch data');
      }
      
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this registration?')) return;
    
    try {
      const response = await fetch(`/api/registrations/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        // Refresh data
        fetchData();
      } else {
        const result = await response.json();
        alert(result.error || 'Failed to delete registration');
      }
    } catch {
      alert('Error connecting to server');
    }
  };

  const exportCSV = () => {
    if (!data || !data.registrations) return;

    const headers = ['Name', 'Email', 'College', 'Department', 'Level', 'Interest', 'Heard From', 'Date'];
    const csvRows = [headers.join(',')];

    data.registrations.forEach(reg => {
      const row = [
        `"${reg.full_name.replace(/"/g, '""')}"`,
        `"${reg.email}"`,
        `"${reg.college}"`,
        `"${reg.department.replace(/"/g, '""')}"`,
        `"${reg.level}"`,
        `"${reg.interest}"`,
        `"${reg.heard_from}"`,
        `"${new Date(reg.created_at).toLocaleString()}"`
      ];
      csvRows.push(row.join(','));
    });

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `registrations_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Render Login State
  if (!isAuthenticated && !isLoading) {
    return (
      <div className="admin-page login-mode">
        <div className="ambient-glow-bg"></div>
        <div className="ambient-noise"></div>
        <div className="admin-login-container">
          <h2>Admin Dashboard</h2>
          <p>Enter the admin password to view registrations.</p>
          
          {loginError && <div className="error-message">{loginError}</div>}
          
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Admin Password"
                required
                autoFocus
              />
            </div>
            <button type="submit" className="btn-primary login-btn" disabled={isLoggingIn}>
              {isLoggingIn ? 'Logging in...' : 'Access Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Render Loading State
  if (isLoading || !data) {
    return (
      <div className="admin-page">
        <div className="ambient-glow-bg"></div>
        <div className="ambient-noise"></div>
        <div className="loading-state">Loading dashboard data...</div>
      </div>
    );
  }

  // Render Dashboard
  return (
    <div className="admin-page dashboard-mode">
      <div className="ambient-glow-bg"></div>
      <div className="ambient-noise"></div>
      
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <h2>Admin Dashboard</h2>
            <p>Campus to Career 2.0 Registration Analytics</p>
          </div>
          <button onClick={exportCSV} className="btn-secondary export-btn">
            Export CSV
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        {/* Summary Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Registrations</h3>
            <div className="stat-value">{data.stats.total}</div>
          </div>
          <div className="stat-card">
            <h3>Registered Today</h3>
            <div className="stat-value">{data.stats.today}</div>
          </div>
          <div className="stat-card">
            <h3>Colleges Represented</h3>
            <div className="stat-value">{data.stats.uniqueCollegesCount}</div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="charts-grid">
          <div className="chart-card">
            <h3>Registrations by College</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.chartData.byCollege}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {data.chartData.byCollege.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#312435', border: '1px solid #E8971A' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="chart-card">
            <h3>Registrations by Level</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.chartData.byLevel}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" allowDecimals={false} />
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#312435', border: '1px solid #E8971A' }}
                    cursor={{fill: 'rgba(255,255,255,0.1)'}}
                  />
                  <Bar dataKey="value" fill="#5799BA" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="chart-card full-width">
            <h3>What caught their interest?</h3>
            <div className="chart-wrapper bar-horizontal">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.chartData.byInterest} layout="vertical" margin={{ left: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis type="number" stroke="#fff" allowDecimals={false} />
                  <YAxis dataKey="name" type="category" stroke="#fff" width={150} tick={{fontSize: 12}} />
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#312435', border: '1px solid #E8971A' }}
                    cursor={{fill: 'rgba(255,255,255,0.1)'}}
                  />
                  <Bar dataKey="value" fill="#E8971A" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="table-card">
          <h3>Recent Registrations</h3>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>College</th>
                  <th>Dept</th>
                  <th>Level</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.registrations.slice(0, 50).map((reg) => (
                  <tr key={reg.id}>
                    <td>{reg.full_name}</td>
                    <td>{reg.email}</td>
                    <td><span className="badge">{reg.college}</span></td>
                    <td>{reg.department}</td>
                    <td>{reg.level}</td>
                    <td>{new Date(reg.created_at).toLocaleDateString()}</td>
                    <td>
                      <button 
                        onClick={() => handleDelete(reg.id)}
                        className="btn-delete"
                        style={{ padding: '4px 8px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data.registrations.length > 50 && (
              <div className="table-footer">Showing first 50 entries. Export CSV for full data.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;