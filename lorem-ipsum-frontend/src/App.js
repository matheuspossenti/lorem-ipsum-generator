import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [lorem, setLorem] = useState('');
  const [error, setError] = useState('');

  const generateLorem = async () => {
    try {
      const response = await axios.get('http://localhost:3001/generate');
      setLorem(response.data.lorem);
      setError('');
    } catch (error) {
      console.error('Error fetching Lorem Ipsum:', error);
      setError('Error fetching Lorem Ipsum');
    }
  };

  return (
    <div className="card-container">
      <h1>Lorem Ipsum Generator</h1>
      <button onClick={generateLorem}>Generate Lorem Ipsum</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>{lorem}</p>
    </div>
  );
}

export default App;
