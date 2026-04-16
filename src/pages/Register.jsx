import { useEffect } from 'react';

const SELAR_URL = 'https://selar.com/02i142m13v';

const Register = () => {
  useEffect(() => {
    window.location.href = SELAR_URL;
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontFamily: "'Outfit', sans-serif",
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <div>
        <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
          Redirecting you to the ticket page...
        </p>
        <p style={{ fontSize: '0.95rem', opacity: 0.6, marginTop: '12px' }}>
          If you are not redirected,{' '}
          <a
            href={SELAR_URL}
            style={{ color: '#E8971A', textDecoration: 'underline' }}
          >
            click here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
