import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Summary.css'
import {stripHtml} from 'string-strip-html';


const Summary = () => {
    const [movie, setMovie] = useState([])
    const [bookingDetails, setBookingDetails] = useState({});
    const [showForm, setShowForm] = useState(false);
    const {showId} = useParams()
    const[summaryText, setSummaryText] = useState("")
    useEffect(()=>{
        getSummary()        
    },[])
    async function getSummary(){
        const response = await fetch(`https://api.tvmaze.com/shows/${showId}`)
        const  data = await response.json()
        setMovie(data)
        const text = await data?.summary;
        setSummaryText(stripHtml(text)?.result);
        // console.log("summary-->"+data)
    }
    
    

    const handleBookingDetailsChange = (event) => {
      setBookingDetails((prevBookingDetails) => ({
        ...prevBookingDetails,
        [event.target.name]: event.target.value,
      }));
    };
    const handleClick=()=>{
      setShowForm(true)
    }
    const handleBookTicket = (event) => {
      event.preventDefault();
      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
      setBookingDetails({});
      setShowForm(false);
    };

  return (
    <div className='wrapper'>
      <div className="movie-booking">
      <div className="movie-booking__poster">
        {movie?.image?.original?<img src={movie?.image?.original} alt="" />:<img src="https://occ-0-299-300.1.nflxso.net/art/4d773/4887f7fdb8cce119a89cb184d69f9a08ff64d773.jpg" alt={movie?.name} />}
      </div>
      <div className="movie-booking__details">
        <div className='movie-booking__cont'>
        <h2 className="movie-booking__title">{movie?.name}</h2>
        <p className="movie-booking__description">{summaryText}</p>
        <p className="movie-booking__duration">Duration: {120} mins</p>
        <p className="movie-booking__genre">Genre: {movie?.genres?.join(", ")}</p>
        <p className="movie-booking__rating">Rating: {movie?.rating?.average ? movie?.rating?.average : 7.5} / 10</p>
        </div>
        <a href="#form"><button className="movie-booking__button" onClick={handleClick}>Book Tickets</button></a>
      </div>
    </div>

    
    <div className='form-container'>
    {showForm && (
      <form onSubmit={handleBookTicket} id="form">
      <h2>Book a Ticket</h2>
      <p className='movie-name'>Movie Name: {movie?.name}</p>
      <p>
        Name
        <input
          type="text"
          name="name"
          value={bookingDetails.name || ""}
          onChange={handleBookingDetailsChange}
        />
      </p>
      <p>
        Email
        <input
          type="email"
          name="email"
          value={bookingDetails.email || ""}
          onChange={handleBookingDetailsChange}
        />
      </p>
      <div>
      <button className='btn' type="submit">Book Ticket</button>
      <button className='btn' onClick={()=>{setShowForm(false)}}>Cancel</button>
      </div>
    </form>

    )}
    </div>
    </div>
  )
}

export default Summary



