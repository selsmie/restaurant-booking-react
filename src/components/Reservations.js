import "./Reservation.css"
import {useState} from "react"

const Reservations = ({reservations, onSeatedBooking, onDepartedBooking, allTables}) => { 

    const [assignTable, setAssignTable] = useState(null)

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

    const checkIn = (evt) => {
        reservations[evt.target.value].status = "seated"
        reservations[evt.target.value].table = assignTable
        onSeatedBooking(reservations[evt.target.value])
    }

    const checkOut = (evt) => {
        reservations[evt.target.value].status = "departed"
        onDepartedBooking(reservations[evt.target.value])
    }

    const handleTableSelect = (evt) => {
        setAssignTable(allTables[evt.target.value])
    }

    const displayStatusButton = (reservation, index) => {
        if(reservation.status === "booked"){
            return <div>
                    <select onChange={handleTableSelect}>
                        <option value="disbabled">-</option>
                        {displayTables}
                    </select>
                    <button onClick={checkIn} value={index}>C/I</button>
                    </div>
        } else if (reservation.status === "seated") {
            return <button value={index} onClick={checkOut}>C/O</button>
        } else {
            return null
        }
    }

    

    const displayTables = allTables.map((table, index) => <option value={index} key={index}>{table.number}</option>)

    const displayAllBookings = (reservations.length) ? 
        reservations.map((reservation, index) => {
            return <div key={index} className="single-booking" id={reservation.status}>
                {displayStatusButton(reservation, index)}
                
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