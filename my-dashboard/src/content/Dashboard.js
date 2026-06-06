import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';


function Dashboard() {
  const [graphData, setGraphData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/')
      .then((response) => {
        console.log(response.data)
        setGraphData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading frontend data:", err);
        setError("Failed to load graph data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ textAlignment: 'center', marginTop: '50px' }}>Loading chart data...</div>;
  if (error) return <div style={{ color: 'red', textAlignment: 'center', marginTop: '50px' }}>{error}</div>;

  return (
    <div style={{ width: '80%', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Dynamic Data Graph</h2>

      <div style={{ width: '100%', height: 400, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={graphData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" /> 
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="id" 
              stroke="#8884d8" 
              activeDot={{ r: 8 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard
