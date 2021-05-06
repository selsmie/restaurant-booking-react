const restaurantURL = "http://localhost:8080/restaurants/"

const getAllRestaurants = () => {
    return fetch(restaurantURL)
    .then(res => res.json())
}

const createRestaurant = (restaurant) => {
    return fetch(restaurantURL, {
        method: "POST",
        body: JSON.stringify(restaurant),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
}

const updateRestaurant = (restaurant, id) => {
    return fetch(restaurantURL + id, {
        method: "PUT",
        body: JSON.stringify(restaurant),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
} 

const deleteRestaurant = (id) => {
    return fetch(restaurantURL + id, {
        method: "DELETE"
    })
}

export {getAllRestaurants, createRestaurant, updateRestaurant, deleteRestaurant}