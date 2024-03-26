



import  { useState, useEffect } from 'react';
import './Dash.css';
import Logout from './Logout';

function Dashboard() {
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState(null);
    const [reservations, setReservations] = useState([]);

    const getReservations = () => {
        fetch('http://localhost/backend/admin/view-reservations.php',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
            }
        
        })
            .then(response => response.json())
            .then(res => {
                if(res.status === 'success') {
                    setReservations(res.data);
                }
                else {
                    setError('Error fetching reservations');
                    console.error(res.message);
                }

            })
            .catch(error => console.error('Error fetching reservations:', error));
    }

    useEffect(() => {
        getReservations();
    }, []);

    // Function to delete a reservation
    const deleteReservation = id => {
        const confirmDelete = window.confirm('Are you sure you want to delete this reservation?');
        if (confirmDelete) {
            fetch(`http://localhost/backend/admin/delete-reservation.php?id=${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
                }
            })
                .then(response => response.json())
                .then(res => {
                    if(res.status === 'success') {
                        setMsg(res.message);
                        getReservations();
                    }
                    else {
                        setError(res.message); 
                    }
                })
                .catch(error => console.error('Error deleting reservation:', error));
        }
    };

    // Function to clear all reservations
    const clearAllReservations = () => {
        const confirmClear = window.confirm('Are you sure you want to clear all reservations?');
        if (confirmClear) {
            setReservations([]);
            // Add logic to clear all reservations from backend API here
        }
    };

    return (
        <div className='dashboard-container'>
            <span>
                {error !== ""  && 
                <span className='error'>{error}</span>
                }
                {msg !== ""  &&
                <span className='success'>{msg}</span>
                }
            </span>
            <div style={{float:'right'}}>
                <Logout/>
            </div>
            <h2 className='dashboard-heading'>Admin Panel - SunshineGrand</h2>
            <button onClick={clearAllReservations} className='clear-all-btn'>Clear All Reservations</button>
            <table className='reservation-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Event Date</th>
                        <th>Start Time</th>
                        <th>Event Type</th>
                        <th>Meal Type</th>
                        <th>No. of People</th>
                        <th>Equipment</th>
                        <th>Remarks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reservations.map(reservation => (
                        <tr key={reservation.id}>
                            <td>{reservation.name}</td>
                            <td>{reservation.company}</td>
                            <td>{reservation.phone}</td>
                            <td>{reservation.email}</td>
                            <td>{reservation.eventDate}</td>
                            <td>{reservation.startTime}</td>
                            <td>{reservation.eventType}</td>
                            <td>{reservation.mealType}</td>
                            <td>{reservation.numberOfPeople}</td>
                            <td>{reservation.equipment}</td>
                            <td>{reservation.remarks}</td>
                            <td>
                                <button onClick={() => deleteReservation(reservation.id)} className='delete-btn'>Delete</button>
                            </td>
                        </tr>
                    ))}

                    
                </tbody>
            </table>
                    {
                        reservations.length === 0 && <span className='no-reservations'>No reservations available</span>
                    }
        </div>
    );
}

export default Dashboard;

