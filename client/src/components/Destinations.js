

const Destinations= (props)=> {
console.log(props.destinations)
    return(

        <div className='grid'>
            <h1> Destinations</h1>
        {/* {
            props.destinations.map((destinations) => (
            <div key={destinations.id} className="card">
             <img src={`${image}`} alt="poster" />
            <h3>{destinations.country}</h3>
            <h2>{destinations.city}</h2>
             <button>Delete</button>
            </div>
            ))
        } */}


        </div>
    )
}
export default Destinations;