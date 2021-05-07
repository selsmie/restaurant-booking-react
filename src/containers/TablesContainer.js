import {getAllTables, updateTable} from "../services/TableService"
import {useState, useEffect} from "react"
import "./TablesContainer.css"

const TablesContainer = () => {

    const [allTables, setAllTables] = useState([])

    useEffect(() => {
        getAllTables()
            .then(data => setAllTables(data))
    }, [])

    const displayTables = (allTables.length) ? allTables.map((table, index) => {
        return <div className="table" id={"table"+table.number} key={index}>No: {table.number} - ({table.capacity}) {(table.reservations.length) ? <p>Guest: {table.reservations[0].guest.lastName}</p>: null}
            </div>
    }) : null
    return (
        <div>
            {displayTables}
        </div>
    );
};

export default TablesContainer;