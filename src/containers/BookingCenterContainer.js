import {getAllReservations, updateReservation, createReservation, deleteReservation} from "../services/ReservationServices"
import {getAllRestaurants, updateRestaurant, createRestaurant, deleteRestaurant} from "../services/RestaurantServices"
import {getAllGuests, updateGuest, createGuest, deleteGuest} from "../services/GuestServices"
import {useState, useEffect} from "react"
import Reservations from "../components/Reservations"
import NewBooking from "../components/NewBooking"
import NewGuest from "../components/NewGuest"
import "./BookingCenterContainer.css"

const BookingCenterContainer = () => {

    const [allGuests, setAllGuests] = useState([])
    const [allReservations, setAllReservations] = useState([])
    const [allRestaurants, setAllRestaurants] = useState([])
    const [createBookingForm, setCreateBookingForm] = useState(false)
    const [createGuestForm, setCreateGuestForm] = useState(false)

    useEffect(() => {
        getAllGuests()
            .then(data => setAllGuests(data))
        
        getAllReservations()
            .then(data => setAllReservations(data))

        getAllRestaurants()
            .then(data => setAllRestaurants(data))
    }, [createBookingForm])

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


    return (
        <aside className="booking-center">
            <div className="button-container">
                {showCreateReservation}
                {showCreateGuest}
            </div>
            <NewBooking showForm={createBookingForm} allGuests={allGuests} allRestaurants={allRestaurants} onSubmittedBooking={createNewBooking}/>
            <NewGuest showGuestForm={createGuestForm} onSubmitGuest={createNewGuest}/>
            <Reservations reservations={allReservations}/>
        </aside>
    );
};

export default BookingCenterContainer;