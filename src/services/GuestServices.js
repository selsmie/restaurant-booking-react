const guestURL = "http://localhost:8080/guests/"

const getAllGuests = () => {
    return fetch(guestURL)
    .then(res => res.json())
}

const createGuest = (guest) => {
    return fetch(guestURL, {
        method: "POST",
        body: JSON.stringify(guest),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
}

const updateGuest = (guest, id) => {
    return fetch(guestURL + id, {
        method: "PUT",
        body: JSON.stringify(guest),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
} 

const deleteGuest = (id) => {
    return fetch(guestURL + id, {
        method: "DELETE"
    })
}

export {getAllGuests, createGuest, updateGuest, deleteGuest}
