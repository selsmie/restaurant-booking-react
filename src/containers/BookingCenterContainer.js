import {getAllReservations, updateReservation, createReservation, deleteReservation} from "../services/ReservationServices"
import {getAllRestaurants, updateRestaurant, createRestaurant, deleteRestaurant} from "../services/RestaurantServices"
import {getAllGuests, updateGuest, createGuest, deleteGuest} from "../services/GuestServices"
import {useState, useEffect} from "react"
import Reservations from "../components/Reservations"

const BookingCenterContainer = () => {

    const [allGuests, setAllGuests] = useState([])
    const [allReservations, setAllReservations] = useState([])
    const [allRestaurants, setAllRestaurants] = useState([])

    useEffect(() => {
        getAllGuests()
            .then(data => setAllGuests(data))
        
        getAllReservations()
            .then(data => setAllReservations(data))

        getAllRestaurants()
            .then(data => setAllRestaurants(data))
    }, [])

    const displayName = (allGuests.length) ? <p>{allGuests[0].firstName}</p> : null
    const displayRestaurant = (allRestaurants.length) ? <p>{allRestaurants[0].email}</p> : null
    const displayReservation = (allReservations.length) ? <p>{allReservations[0].time}</p> : null

    return (
        <aside className="booking-center">
            <button>Create Booking</button>
            <Reservations reservations={allReservations}/>
        </aside>
    );
};

export default BookingCenterContainer;