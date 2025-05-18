import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Failed to fetch data');
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

    useEffect(()=> {
    fetchData();}, []);

  const filteredData = data.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

return (
  <div className="data-fetcher">
    <h1>User Data</h1>

    {error && <div className="error">Error: {error}</div>}

    <input
      type="text"
      placeholder="Search by name"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
    />

    {loading ? <div>Loading...</div> : (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length ? filteredData.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          )) : (
            <tr>
              <td colSpan="3">No results found.</td>
            </tr>
          )}
        </tbody>
      </table>
    )}

    <button onClick={fetchData}>Refresh Data</button>
  </div>
);

}

export default DataFetcher;
