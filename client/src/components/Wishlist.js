const Wishlist= (props)=> {

    return(

        <div>
   <form >
   <label htmlFor="tripType">Type of trip:</label>
    <select id="tripType">
      <option value="work">Work</option>
      <option value="visit-family">Visit Family</option>
      <option value="leisure">Leisure</option>
    </select>
    <label htmlFor="city">City:</label>
    <input type="text" id="city" />
    <label htmlFor="coutry">Coutry</label>
    <input id="coutry" type="text"/>
    <label htmlFor="departure">Departure:</label>
    <input id="departure" type="date"/>
    <label htmlFor="returndate">Return date:</label>
    <input id="return" type="date"/>
    <label htmlFor="people">Number of people:</label>
    <input id="dpeople" type= "number"/>
    <button type="submit">Send</button>
      <button>Submit</button>
    </form>
            
        </div>
    )
}

export default Wishlist;