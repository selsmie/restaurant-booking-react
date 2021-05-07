import {useState} from "react"
import "./NewBooking.css"

const NewBooking = ({showForm, allGuests, allRestaurants, onSubmittedBooking}) => {

    const [selectedGuest, setSelectedGuest] = useState("")
    const [covers, setCovers] = useState(1)
    const [restaurant, setRestaurant] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [notes, setNotes] = useState("")

    const clearStates = () => {
        setSelectedGuest("")
        setCovers(1)
        setRestaurant("")
        setDate("")
        setTime("")
        setNotes("")
    }


    const d = new Date()
    const year = d.getFullYear()
    const day = (d.getDate() < 10) ? (`0${d.getDate()}`) : (d.getDate())
    const month = (d.getMonth() + 1 < 10) ? (`0${d.getMonth() + 1}`) : (d.getMonth() + 1)
    const hour = (d.getHours() < 10) ? (`0${d.getHours()}`) : (d.getHours())
    const mins = (d.getMinutes() < 10) ? (`0${d.getMinutes()}`) : (d.getMinutes())
    const current = `${year}-${month}-${day}T${hour}:${mins}`

    const handleGuestChange = (evt) => {
        setSelectedGuest(allGuests[evt.target.value])
        setRestaurant(allRestaurants[0])
    }

    const handleCoversChange = (evt) => {
        setCovers(evt.target.value)
    }

    const handleRestaurantChange = (evt) => {
        setRestaurant(allRestaurants[0])
    }

    const handleNotes = (evt) => {
        setNotes(evt.target.value)
    }

    const handleDateTime = (evt) => {
        setDate(evt.target.value.split("T")[0].trim())
        setTime(evt.target.value.split("T")[1].trim())
        // console.log(evt.target.value)
        console.log(current)
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
            <div className="cover-restaurant">
                <input type="number" name="covers" id="covers" placeholder="Covers" max="10" min="1" required onChange={handleCoversChange}/>
                <select name="restaurants" id="restaurants" onChange={handleRestaurantChange}>
                    {displayRestaurants}
                </select>
            </div>
            <input type="datetime-local" name="datetime"  min={current} id="datetime" defaultValue={current} onChange={handleDateTime}/>
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