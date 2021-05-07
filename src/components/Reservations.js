import {useState} from "react"
import "./Reservation.css"


const Reservations = ({reservations}) => {

    const [toDisplay, setToDisplay] = useState(false)



    const displayAllBookings = (reservations.length) ? 
        reservations.map((reservation, index) => {
            return <div key={index} className="single-booking" id={reservation.status}>
                <h3 id="booking-number">Booking Number: {reservation.id}</h3>
                <h3 id="booking-date">Date: {reservation.date} - {reservation.time}</h3>
                <h3 id="booking-name">Name: {reservation.guest.lastName}, {reservation.guest.firstName}</h3>
                    <div key={index} className="contact-details">
                        <p id="booking-phone">Phone: {reservation.guest.phoneNumber}</p>
                        <p id="booking-email">Email: {reservation.guest.email}</p>
                    </div>
                <h4 id="booking-covers">Covers: {reservation.covers}</h4>
                <p id="booking-notes">Notes: {reservation.notes}</p>
            </div>
        }) : null
    return (
        <div className="reservations">
            {displayAllBookings}
        </div>
    );
};

export default Reservations;