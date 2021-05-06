import {useState} from "react"

const Reservations = ({reservations}) => {

    const [toDisplay, setToDisplay] = useState(false)

    const handleContactReveal = () => {
        if (!toDisplay) {
            setToDisplay(true)
        } else {
            setToDisplay(false)
        }
    }

    const displayContacts = (toDisplay) ? 
        reservations.map((reservation, index) => {
            return <div key={index} className="contact-details">
                        <p>Phone: {reservation.guest.phoneNumber}</p>
                        <p>Email: {reservation.guest.email}</p>
                        <button onClick={handleContactReveal}>Close</button>
                    </div>
        }) : null

    const displayAllBookings = (reservations.length) ? 
        reservations.map((reservation, index) => {
            return <div key={index} className="single-booking">
                <h3>Booking Number: {reservation.id}</h3>
                <h3>Date: {reservation.date} - {reservation.time}</h3>
                <h3 onClick={handleContactReveal}>Name: {reservation.guest.lastName}, {reservation.guest.firstName}</h3>
                {(toDisplay) ? 
                    <div key={index} className="contact-details">
                        <p>Phone: {reservation.guest.phoneNumber}</p>
                        <p>Email: {reservation.guest.email}</p>
                        <button onClick={handleContactReveal}>Close</button>
                    </div>
                : null}
                <h4>Covers: {reservation.covers}</h4>
                <p>Notes: {reservation.notes}</p>
            </div>
        }) : null
    return (
        <div>
            {displayAllBookings}
        </div>
    );
};

export default Reservations;