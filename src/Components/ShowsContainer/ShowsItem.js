import React from 'react'

const ShowsItem = ({props}) => {
  return (
    <div className="movie">
    <div>
        <p>{props?.language}</p>
    </div>

    <div>
        {props?.image?.original?<img src={ props?.image?.original} alt={props?.name} />:<img src="https://occ-0-299-300.1.nflxso.net/art/4d773/4887f7fdb8cce119a89cb184d69f9a08ff64d773.jpg" alt={props?.name} />}
    </div>

    <div>
        <span>{props?.type}</span>
        <h3>{props?.name}</h3>
    </div>
</div>
  )
}

export default ShowsItem