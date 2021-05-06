const reservationURL = "http://localhost:8080/reservations/"

const getAllReservations = () => {
    return fetch(reservationURL)
    .then(res => res.json())
}

const createReservation = (reservation) => {
    return fetch(reservationURL, {
        method: "POST",
        body: JSON.stringify(reservation),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
}

const updateReservation = (reservation, id) => {
    return fetch(reservationURL + id, {
        method: "PUT",
        body: JSON.stringify(reservation),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
} 

const deleteReservation = (id) => {
    return fetch(reservationURL + id, {
        method: "DELETE"
    })
}

export {getAllReservations, createReservation, updateReservation, deleteReservation}