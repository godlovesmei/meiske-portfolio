"use client"; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error('Runtime Error Caught by Boundary:', error);
  }, [error]);

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
      <h2 style={{ fontSize: '3rem', marginBottom: '20px', textShadow: '0 0 10px #ff007f' }}>SYSTEM_FAILURE</h2>
      <p style={{ color: '#f0f0f0', marginBottom: '30px' }}>
        An unexpected exception occurred during execution.
        <br />
        <span style={{ color: '#a0a0a0', fontSize: '0.8rem' }}>{error.message || 'Unknown Error'}</span>
      </p>
      <button
        onClick={() => unstable_retry()}
        style={{
          background: 'transparent',
          border: '1px solid #00e5ff',
          color: '#00e5ff',
          padding: '10px 20px',
          cursor: 'pointer',
          fontFamily: 'monospace',
          textTransform: 'uppercase',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(0, 229, 255, 0.1)'; }}
        onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; }}
      >
        [ INITIATE_REBOOT ]
      </button>
    </div>
  );
}
