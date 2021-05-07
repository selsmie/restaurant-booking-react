const tableURL = "http://localhost:8080/tables/"

const getAllTables = () => {
    return fetch(tableURL)
    .then(res => res.json())
}

const updateTable = (table, id) => {
    return fetch(tableURL + id, {
        method: "PUT",
        body: JSON.stringify(table),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
} 

export {getAllTables, updateTable}