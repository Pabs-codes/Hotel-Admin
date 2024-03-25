



import  { useState, useEffect } from 'react';
import './Dash.css';

function Dashboard() {
    const [reservations, setReservations] = useState([]);

    // Dummy data for demonstration
    useEffect(() => {
        // Fetch reservations data from backend API here
        // Example:
        // fetch('your_backend_api_endpoint')
        //     .then(response => response.json())
        //     .then(data => setReservations(data))
        //     .catch(error => console.error('Error fetching reservations:', error));

        // Dummy data for demonstration
        const dummyData = [
            {
                id: 1,
                name: 'John Doe',
                company: 'ABC Company',
                phone: '123-456-7890',
                email: 'john@example.com',
                eventDate: '03/30/2024',
                startTime: '09:00 AM',
                eventType: 'Conference',
                mealType: 'Lunch',
                numberOfPeople: 50,
                equipment: 'Projector, Microphones',
                remarks: 'Special dietary requirements for some guests'
            },
            {
                id: 2,
                name: 'Jane Smith',
                company: 'XYZ Corporation',
                phone: '987-654-3210',
                email: 'jane@example.com',
                eventDate: '04/05/2024',
                startTime: '02:00 PM',
                eventType: 'Wedding',
                mealType: 'Dinner',
                numberOfPeople: 100,
                equipment: 'Sound System, DJ Setup',
                remarks: 'Vegetarian meal preference for the entire party'
            },
            {
                id: 2,
                name: 'Jane Smith',
                company: 'XYZ Corporation',
                phone: '987-654-3210',
                email: 'jane@example.com',
                eventDate: '04/05/2024',
                startTime: '02:00 PM',
                eventType: 'Wedding',
                mealType: 'Dinner',
                numberOfPeople: 100,
                equipment: 'Sound System, DJ Setup',
                remarks: 'Vegetarian meal preference for the entire party'
            },
            {
                id: 2,
                name: 'Jane Smith',
                company: 'XYZ Corporation',
                phone: '987-654-3210',
                email: 'jane@example.com',
                eventDate: '04/05/2024',
                startTime: '02:00 PM',
                eventType: 'Wedding',
                mealType: 'Dinner',
                numberOfPeople: 100,
                equipment: 'Sound System, DJ Setup',
                remarks: 'Vegetarian meal preference for the entire party'
            },
            {
                id: 2,
                name: 'Jane Smith',
                company: 'XYZ Corporation',
                phone: '987-654-3210',
                email: 'jane@example.com',
                eventDate: '04/05/2024',
                startTime: '02:00 PM',
                eventType: 'Wedding',
                mealType: 'Dinner',
                numberOfPeople: 100,
                equipment: 'Sound System, DJ Setup',
                remarks: 'Vegetarian meal preference for the entire party'
            },
            {
                id: 2,
                name: 'Jane Smith',
                company: 'XYZ Corporation',
                phone: '987-654-3210',
                email: 'jane@example.com',
                eventDate: '04/05/2024',
                startTime: '02:00 PM',
                eventType: 'Wedding',
                mealType: 'Dinner',
                numberOfPeople: 100,
                equipment: 'Sound System, DJ Setup',
                remarks: 'Vegetarian meal preference for the entire party'
            }
        ];

        setReservations(dummyData);
    }, []);

    // Function to delete a reservation
    const deleteReservation = id => {
        const confirmDelete = window.confirm('Are you sure you want to delete this reservation?');
        if (confirmDelete) {
            const updatedReservations = reservations.filter(reservation => reservation.id !== id);
            setReservations(updatedReservations);
            // Add logic to delete reservation from backend API here
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
                    {reservations.map(reservation => (
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
        </div>
    );
}

export default Dashboard;

