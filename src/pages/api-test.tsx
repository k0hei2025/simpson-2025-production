import { useState, useEffect } from 'react';
import type { NextPage } from 'next';

const ApiTest: NextPage = () => {
  const [message, setMessage] = useState<string>('Loading...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/v1/hello');
        
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        
        const data = await response.json();
        setMessage(data.message);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>API Connection Test</h1>
      
      {error ? (
        <div style={{ color: 'red' }}>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      ) : (
        <div>
          <h2>Response from API:</h2>
          <p>{message}</p>
        </div>
      )}
      
      <div style={{ marginTop: '2rem' }}>
        <p>This page tests the connection to the Rails backend API.</p>
        <p>It should display a message from the /v1/hello endpoint.</p>
      </div>
    </div>
  );
};

export default ApiTest;
