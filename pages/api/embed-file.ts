// pages/leaderboard.js

import { useEffect, useState } from 'react';

export default function Leaderboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      const res = await fetch('/api/leaderboard');
      const json = await res.json();
      setData(json);
      setLoading(false);
    }
    fetchLeaderboard();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Kaito Yaps Leaderboard 📊</h1>

      {loading ? (
        <p>Loading leaderboard...</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ background: '#f2f2f2' }}>
              <th style={th}>Token</th>
              <th style={th}>Total Yaps</th>
              <th style={th}>Bullish %</th>
              <th style={th}>Last Yap</th>
              <th style={th}>Badge</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} style={{ textAlign: 'center', borderBottom: '1px solid #ccc' }}>
                <td style={td}>${item.token.toUpperCase()}</td>
                <td style={td}>{item.total_yaps}</td>
                <td style={td}>{item.bullish_percent}%</td>
                <td style={td}>{new Date(item.last_yap).toLocaleString()}</td>
                <td style={td}>{item.badge}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const th = { padding: '10px', border: '1px solid #ddd' };
const td = { padding: '8px' };
