import {getAllReservations, updateReservation, createReservation, departReservation} from "../services/ReservationServices"
import {getAllRestaurants} from "../services/RestaurantServices"
import {getAllGuests, createGuest} from "../services/GuestServices"
import {useState, useEffect} from "react"
import Reservations from "../components/Reservations"
import NewBooking from "../components/NewBooking"
import NewGuest from "../components/NewGuest"
import "./BookingCenterContainer.css"
import {getAllTables} from "../services/TableService"
import TablesContainer from "./TablesContainer"

const BookingCenterContainer = () => {

    const [allGuests, setAllGuests] = useState([])
    const [allReservations, setAllReservations] = useState([])
    const [allRestaurants, setAllRestaurants] = useState([])
    const [createBookingForm, setCreateBookingForm] = useState(false)
    const [createGuestForm, setCreateGuestForm] = useState(false)
    const [allTables, setAllTables] = useState([])
    const [pageReload, setPageReload] = useState(0)

    useEffect(() => {
        getAllRestaurants()
            .then(data => setAllRestaurants(data))


    }, [])
    
    useEffect(() => {
        getAllGuests()
            .then(data => setAllGuests(data))
        
        getAllReservations()
            .then(data => setAllReservations(data))

        getAllTables()
            .then(data => setAllTables(data))
    }, [pageReload, createBookingForm, createGuestForm])

    const displayResForm = () => {
        if (!createBookingForm) {
            setCreateBookingForm(true)
            setCreateGuestForm(false)
        } else {
            setCreateBookingForm(false)
        }
    }

    const displayGuestForm = () => {
        if (!createGuestForm) {
            setCreateGuestForm(true)
            setCreateBookingForm(false)
            
        } else {
            setCreateGuestForm(false)
        }
    }

    const showCreateReservation = (createBookingForm) ? <button onClick={displayResForm} className="create-buttons">Close</button> : <button onClick={displayResForm} className="create-buttons">Create Booking</button>

    const showCreateGuest = (createGuestForm) ? <button onClick={displayGuestForm} className="create-buttons">Close</button> : <button onClick={displayGuestForm} className="create-buttons">Create Guest</button>

    const createNewBooking = (submitted) => {
        createReservation(submitted)
        displayResForm()
    }

    const createNewGuest = (submitted) => {
        createGuest(submitted)
        displayGuestForm()
    }

    const triggerReload = () => {
        if(pageReload === 0) {
            setPageReload(1)
        } else {
            setPageReload(0)
        }
    }

    const seatBooking = (submitted) => {
        updateReservation(submitted, submitted.id)
        triggerReload()
    }

    const departBooking = (submitted) => {
        departReservation(submitted, submitted.id)
        triggerReload()
    }


    return (
        <>
        <aside className="booking-center">
            <div className="button-container">
                {showCreateReservation}
                {showCreateGuest}
            </div>
            <NewBooking showForm={createBookingForm} allGuests={allGuests} allRestaurants={allRestaurants} onSubmittedBooking={createNewBooking}/>
            <NewGuest showGuestForm={createGuestForm} onSubmitGuest={createNewGuest}/>
            <Reservations reservations={allReservations} onSeatedBooking={seatBooking} onDepartedBooking={departBooking} allTables={allTables}/>
        </aside>
        <section>
            <TablesContainer allTables={allTables}/>
        </section>
        </>
    );
};

export default BookingCenterContainer;