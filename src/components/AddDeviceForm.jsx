import React, { useState } from 'react';
import axios from 'axios';

const AddDeviceForm = () => {
  const [megnevezes, setMegnevezes] = useState('');
  const [leiras, setLeiras] = useState('');
  const [kepek, setKepek] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDevice = { megnevezes, leiras, kepek };

    axios.post('https://localhost:5001/api/UjTipusok', newDevice)
      .then(response => {
        alert('Eszköz hozzáadva!');
        setMegnevezes('');
        setLeiras('');
        setKepek('');
      })
      .catch(error => setError('Hiba a hozzáadás során.'));
  };

  return (
    <div className="add-device">
      <h2>Új Típus Hozzáadása</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={megnevezes} 
          onChange={(e) => setMegnevezes(e.target.value)} 
          placeholder="Megnevezés" 
          required 
        />
        <input 
          type="text" 
          value={leiras} 
          onChange={(e) => setLeiras(e.target.value)} 
          placeholder="Leírás" 
          required 
        />
        <input 
          type="text" 
          value={kepek} 
          onChange={(e) => setKepek(e.target.value)} 
          placeholder="Kép URL" 
        />
        <button type="submit">Hozzáadás</button>
      </form>
    </div>
  );
};

export default AddDeviceForm;