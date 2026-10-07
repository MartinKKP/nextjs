'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: '1rem 0', padding: '1rem', border: '1px solid #ccc' }}>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}