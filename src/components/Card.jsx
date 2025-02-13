import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ device }) => {
  return (
    <div className="card">
      <div className="card-content">
        {device.kepek && <img src={device.kepek} alt={device.megnevezes} className="card-image" />}
        <p className="card-description">{device.leiras}</p>
      </div>
      <div className="card-footer">
        <Link to={`/device/${device.id}`} className="card-link">Részletek</Link>
      </div>
    </div>
  );
};

export default Card;