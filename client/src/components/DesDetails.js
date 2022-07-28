import { useState, useEffect } from 'react'
import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api'

const DestinationsDetails = (props) => {
    const [destinationsDetails, setDestinationsDetails] = useState({})

    useEffect(() => {
        async function getDestinations() {
            const res = await axios.get(`${BASE_URL}}`)
            setDestinationsDetails(res.data)
        }
        getDestinations()
    }, [props.selectedDestinations])

    return (
        <div>
            <h1>{ destinationsDetails.country }</h1>
        </div>
    )
}

export default DestinationsDetails