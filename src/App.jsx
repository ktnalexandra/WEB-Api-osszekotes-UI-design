import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DeviceList from './components/DeviceList';
import DeviceDetails from './components/DeviceDetails';
import AddDeviceForm from './components/AddDeviceForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<DeviceList />} />
          <Route path="/device/:id" element={<DeviceDetails />} />
          <Route path="/add" element={<AddDeviceForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
