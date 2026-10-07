'use client';
import { useState } from 'react';

export default function MessageLoader() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMessage = async () => {
    setLoading(true);
    setError('');
    setMessage('');
    try {
      const res = await fetch('/api/message');
      if (!res.ok) throw new Error('Failed to fetch message');
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={fetchMessage}>Load server message</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p>Server says: {message}</p>}
    </div>
  );
}