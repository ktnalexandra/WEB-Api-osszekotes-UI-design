import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'; // Importáljuk a Card komponenst

const DeviceList = () => {
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://localhost:5001/api/Tipusok')
      .then(response => setDevices(response.data))
      .catch(error => setError('Network Error'));
  }, []);

  return (
    <div className="device-list">
      <h2>Eszközök</h2>
      {error && <p>{error}</p>}
      <div className="card-container">
        {devices.map(device => (
          <Card key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
};

export default DeviceList;