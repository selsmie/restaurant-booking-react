import {getAllReservations, updateReservation, createReservation, deleteReservation} from "../services/ReservationServices"
import {getAllRestaurants, updateRestaurant, createRestaurant, deleteRestaurant} from "../services/RestaurantServices"
import {getAllGuests, updateGuest, createGuest, deleteGuest} from "../services/GuestServices"
import {useState, useEffect} from "react"
import Reservations from "../components/Reservations"
import NewBooking from "../components/NewBooking"
import NewGuest from "../components/NewGuest"

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
            
        } else {
            setCreateBookingForm(false)
        }
    }

    const displayGuestForm = () => {
        if (!createGuestForm) {
            setCreateGuestForm(true)
            
        } else {
            setCreateGuestForm(false)
        }
    }

    const showCreateReservation = (createBookingForm) ? <button onClick={displayResForm}>Close</button> : <button onClick={displayResForm}>Create Booking</button>

    const showCreateGuest = (createGuestForm) ? <button onClick={displayGuestForm}>Close</button> : <button onClick={displayGuestForm}>Create Guest</button>

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
            {showCreateReservation}
            {showCreateGuest}
            <NewBooking showForm={createBookingForm} allGuests={allGuests} allRestaurants={allRestaurants} onSubmittedBooking={createNewBooking}/>
            <NewGuest showGuestForm={createGuestForm} onSubmitGuest={createNewGuest}/>
            <Reservations reservations={allReservations}/>
        </aside>
    );
};

export default BookingCenterContainer;