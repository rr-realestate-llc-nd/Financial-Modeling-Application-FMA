import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch("/api")
            .then((response) => response.json())
            .then((data) => {
                setBackendData(data);
            });
    }, []);

    return (
        <div className='dashboard'>
            <div className='dashboard-heading'>
                <h1>Dashboard</h1>
                <h4>Welcome to the Dashboard!</h4>
            </div>
            <div className='data-card'>
                {(typeof backendData.users === 'undefined') ? (
                    <p>Loading...</p>
                ) : (
                    backendData.users.map((user, i) => (
                        <div className='data' key={user.id}>
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Age: {user.age}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Dashboard;