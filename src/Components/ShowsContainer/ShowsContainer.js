import React, { useEffect, useState } from 'react'
import './showContainer.css'
import ShowsItem from './ShowsItem'
import { Link } from 'react-router-dom'

const ShowsContainer = () => {
    const [shows, setShows] = useState([])
    useEffect(()=>{
        fetchShows()
    },[])
async function fetchShows(){
    const data = await fetch("https://api.tvmaze.com/search/shows?q=all")
    const response = await data.json()
    setShows(response)
    console.log(response)
}

  return(
    <div className='container'>
        {shows.map((item)=>(
            <Link to={'/show/'+ item.show.id} key={item.show.id}><ShowsItem props={item.show}/></Link>
    )
    )}
    </div>
  )
}

export default ShowsContainer