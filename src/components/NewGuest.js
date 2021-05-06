import {useState} from "react"

const NewGuest = ({showGuestForm, onSubmitGuest}) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")


    const handleFirstName = (evt) => {
        setFirstName(evt.target.value)
    }

    const handleLastName = (evt) => {
        setLastName(evt.target.value)
    }

    const handlePhoneNumber = (evt) => {
        setPhoneNumber(evt.target.value)
    }

    const handleEmail = (evt) => {
        setEmail(evt.target.value)
    }

    const clearStates = () => {
        setFirstName("")
        setLastName("")
        setPhoneNumber("")
        setEmail("")
    }

    const handleGuestSubmit = (evt) => {
        evt.preventDefault()
        onSubmitGuest({
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email
        })

        clearStates()
    }

    const displayGuestForm = (showGuestForm) ? 
        <form onSubmit={handleGuestSubmit}>
            <input type="text" name="firstName" id="firstName" placeholder="First Name" required onChange={handleFirstName}/>
            <input type="text" name="firstName" id="firstName" placeholder="Last Name" required onChange={handleLastName}/>
            <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" required onChange={handlePhoneNumber}/>
            <input type="email" name="email" id="email" placeholder="Email" required onChange={handleEmail}/>
            <input type="submit" value="Create Guest" />
        </form> : null
    return (
        <div>
            {displayGuestForm}
        </div>
    );
};

export default NewGuest;