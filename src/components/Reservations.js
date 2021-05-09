import "./Reservation.css"


const Reservations = ({reservations}) => {

    const revealDetails = (evt) => {
        const index = evt.target.value
        document.getElementById("contact-details"+index).style.display = "initial"
        document.getElementById("details-button-open"+index).style.display = "none"
        document.getElementById("details-button-close"+index).style.display = "initial"

    }

    const closeDetails = (evt) => {
        const index = evt.target.value
        document.getElementById("contact-details"+index).style.display = "none"
        document.getElementById("details-button-open"+index).style.display = "initial"
        document.getElementById("details-button-close"+index).style.display = "none"
    }

    const displayAllBookings = (reservations.length) ? 
        reservations.map((reservation, index) => {
            return <div key={index} className="single-booking" id={reservation.status}>
                <h3 id="booking-number">Booking Number: {reservation.id}</h3>
                <h3 id="booking-date">Date: {reservation.date} - {reservation.time}</h3>
                <h3 id="booking-name"> Name: {reservation.guest.lastName}, {reservation.guest.firstName} <button id={"details-button-open"+index} type="submit" onClick={revealDetails} value={index}>+</button>
                <button type="submit" id={"details-button-close"+index} className="details-button-close" onClick={closeDetails} value={index}>-</button></h3>
                    <div key={index} className="contact-details" id={"contact-details"+index} >
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