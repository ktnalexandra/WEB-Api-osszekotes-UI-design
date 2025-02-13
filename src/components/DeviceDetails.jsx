import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DeviceDetails = () => {
  const { id } = useParams();
  const [device, setDevice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://localhost:5001/api/Tipusok/${id}`)
      .then(response => setDevice(response.data))
      .catch(error => setError('Device not found.'));
  }, [id]);

  return (
    <div className="device-details">
      {error && <p>{error}</p>}
      {device && (
        <>
          <h2>{device.megnevezes}</h2>
          <p>{device.leiras}</p>
          {device.kepek && <img src={device.kepek} alt={device.megnevezes} />}
        </>
      )}
    </div>
  );
};

export default DeviceDetails;