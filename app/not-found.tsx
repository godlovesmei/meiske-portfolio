import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0c',
      color: '#ff007f',
      fontFamily: 'monospace',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: '6rem',
        marginBottom: '10px',
        textShadow: '0 0 10px #ff007f, 0 0 30px rgba(255, 0, 127, 0.3)',
        letterSpacing: '8px'
      }}>
        404
      </h2>
      <h3 style={{
        fontSize: '2rem',
        marginBottom: '20px',
        color: '#00e5ff',
        textShadow: '0 0 10px #00e5ff',
        letterSpacing: '4px'
      }}>
        SECTOR_NOT_FOUND
      </h3>
      <p style={{ color: '#a0a0a0', marginBottom: '30px', maxWidth: '400px', lineHeight: '1.6' }}>
        The requested coordinates do not map to any known sector.
        Recalibrate your trajectory and try again.
      </p>
      <Link
        href="/"
        style={{
          background: 'transparent',
          border: '1px solid #00e5ff',
          color: '#00e5ff',
          padding: '12px 24px',
          cursor: 'pointer',
          fontFamily: 'monospace',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontSize: '0.9rem',
          transition: 'all 0.3s ease',
          textDecoration: 'none'
        }}
      >
        [ RETURN_TO_BASE ]
      </Link>
    </div>
  );
}
