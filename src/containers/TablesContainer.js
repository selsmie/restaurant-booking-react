// import {getAllTables} from "../services/TableService"
// import {useState, useEffect} from "react"
import "./TablesContainer.css"

const TablesContainer = ({allTables}) => {

    // const [allTables, setAllTables] = useState([])

    // useEffect(() => {
    //     getAllTables()
    //         .then(data => setAllTables(data))
    // }, [])

    const displayTables = (allTables.length) ? allTables.map((table, index) => {
        return <div className={table.shape} id={"table"+table.number} key={index}><p className="table-details">No: {table.number} - ({table.capacity})</p> {(table.reservations.length) ? <p className="guest-details">Guest: {table.reservations[0].guest.lastName}</p>: null}
            </div>
    }) : null
    return (
        <div>
            {displayTables}
        </div>
    );
};

export default TablesContainer;