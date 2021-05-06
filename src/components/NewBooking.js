import {useState} from "react"
import "./NewBooking.css"

const NewBooking = ({showForm, allGuests, allRestaurants, onSubmittedBooking}) => {

    const [selectedGuest, setSelectedGuest] = useState("")
    const [covers, setCovers] = useState(0)
    const [restaurant, setRestaurant] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [notes, setNotes] = useState("")

    const clearStates = () => {
        setSelectedGuest("")
        setCovers(0)
        setRestaurant("")
        setDate("")
        setTime("")
        setNotes("")
    }

    const handleGuestChange = (evt) => {
        // setSelectedGuest(allGuests.find(guest => guest.id = evt.target.value[0]))
        // console.log(evt.target.value.split(",")[0].trim())
        // console.log(evt.target.value.split(",")[1].trim())
        // const surnames = allGuests.filter((guest) => evt.target.value.split(",")[0].trim() === guest.lastName)
        // console.log(surnames)
        // console.log(evt.target.value.split(",")[1])
        // console.log(surnames.filter((guest) => evt.target.value.split(",")[1].trim() === guest.firstName))
        // setSelectedGuest(surnames.filter((guest) => evt.target.value.split(",")[1] === guest.firstName))
        setSelectedGuest(allGuests[evt.target.value])
        setRestaurant(allRestaurants[0])
    }

    const handleCoversChange = (evt) => {
        setCovers(evt.target.value)
    }

    const handleRestaurantChange = (evt) => {
        setRestaurant(allRestaurants[0])
    }

    const handleDate = (evt) => {
        setDate(evt.target.value)
    }

    const handleTime = (evt) => {
        setTime(evt.target.value)
    }

    const handleNotes = (evt) => {
        setNotes(evt.target.value)
    }

    const handleBookingSave = (evt) => {
        evt.preventDefault()
        onSubmittedBooking(
            {
                guest: selectedGuest,
                covers: covers,
                restaurant: restaurant,
                date: date,
                time: time,
                notes: notes
            })

        clearStates()
    }

    const displayGuests = allGuests.map((guest, index) => {
        return <option value={index} key={guest.id}>{guest.lastName}, {guest.firstName}</option>
    })

    const displayRestaurants = allRestaurants.map((restaurant, index) => {
        return <option value={index} key={restaurant.id} id={index}>{restaurant.name}</option>
    })

    const displayForm = (showForm) ? 
        <form onSubmit={handleBookingSave} className="booking-form">
            <input list="guests" placeholder="Select Guest" onChange={handleGuestChange}/>
            <datalist id="guests">
                {displayGuests}
            </datalist>
            <input type="number" name="covers" id="covers" placeholder="Covers" max="10" min="1" required onChange={handleCoversChange}/>
            <select name="restaurants" id="restaurants" onChange={handleRestaurantChange}>
                {displayRestaurants}
            </select>
            <input type="date" id="date" required onChange={handleDate}/>
            <input type="time" placeholder="Time" id="time" required onChange={handleTime}/>
            <textarea name="notes" id="notes" cols="15" rows="5" onChange={handleNotes}/>
            <input type="submit" value="Create booking" id="create-booking-button"/>
        </form> : null
    return (
        <div>
            {displayForm}
        </div>
    );
};

export default NewBooking;