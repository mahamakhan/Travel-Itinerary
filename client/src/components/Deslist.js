import Destinations from "./Destinations"

const DestinationsList = (props) => {
    console.log(props.Destinationss)
    return (
        <div className="grid">
            {
                props.destinationss.map((destinations) => (
                    <div key={ Destinations.id } className="card">
                        {/* <img src={`${POSTER_PATH}${Destinations.backdrop_path}`} alt="poster" /> */}
                        <h3>{ Destinations.country}</h3>
                        <button onClick={() => props.getDestinations(destinations.id) } >View Destination</button>
                    </div>
                ))
            }
        </div>
    )

}

export default DestinationsList