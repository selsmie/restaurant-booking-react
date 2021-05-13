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
        const resToCheckIn = reservations.find((reservation) => reservation.id === parseInt(evt.target.value))
        resToCheckIn.status = "seated"
        resToCheckIn.table = assignTable
        onSeatedBooking(resToCheckIn)
    }

    const checkOut = (evt) => {
        const resToCheckOut = reservations.find((reservation) => reservation.id === parseInt(evt.target.value))
        resToCheckOut.status = "departed"
        onDepartedBooking(resToCheckOut)
    }

    const handleTableSelect = (evt) => {
        const foundTable = allTables.find((table) => table.id === parseInt(evt.target.value))
        setAssignTable(foundTable)
        // console.log(evt.target.value)
        document.getElementById("checkin-button"+evt.target.id).style.display = "initial"
    }

    const displayStatusButton = (reservation) => {
        if(reservation.status === "booked"){
            return <div>
                    <label>Table: </label>
                    <select onChange={handleTableSelect}>
                        <option value="disbabled">-</option>
                        {displayTables(reservation.covers)}
                    </select>
                    <button onClick={checkIn} value={reservation.id} className="checkin-button" id={(reservation.table === null) ? "checkin-button" : "checkin-button"+reservation.table.id}>C/I</button>
                    </div>
        } else if (reservation.status === "seated") {
            return <button value={reservation.id} onClick={checkOut}>C/O</button>
        } else {
            return null
        }
    }

    const filterEmptyTables = allTables.filter((table) => table.reservations.length === 0)

    const displayTables = (covers) => {
        const filterCapacityTables = filterEmptyTables.filter((table) => table.capacity >= covers)
        return filterCapacityTables.map((table, index) => <option value={table.id} key={index}>{table.number}</option>)
    }
    
    

    const displayAllBookings = (reservations.length) ? 
        reservations.map((reservation, index) => {
            return <div key={index} className="single-booking" id={reservation.status}>
                {displayStatusButton(reservation)}
                
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