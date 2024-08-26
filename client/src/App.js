import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import './styles/App.css';

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    console.log("yo!");
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
    // <div>
    //   {(typeof backendData.users === 'undefined') ? (
    //     <p>Loading...</p>
    //   ) : (
    //     backendData.users.map((user, i) => (
    //       <p key={i}>{user}</p>
    //     ))
    //   )}
    // </div>
  );
}

export default App;
