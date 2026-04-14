import { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('Loading...');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/message')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch message');
        }
        return res.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>Exercise 21 App</h1>
      <p>Basic React frontend + Express backend.</p>
      {error ? <p>Error: {error}</p> : <p>Backend says: {message}</p>}
    </div>
  );
}