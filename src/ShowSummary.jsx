// ShowSummary.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  const handleBookTicket = () => {
    alert('Booking ticket for ' + show.name);
  };
  console.log(show)

  return (
    <div>
      {show ? (
    // {showS.img}
    <div className='Summary-Box'>
    <img src={show.image.original} className='Summary-Image' alt="No Image"/>
    <div className='Summary-Details'>
    <h1>Show Name: {show.name}</h1>
    <div className='Movie-Genre'>
      <span className='Heading'>Genres:</span>
    {show.genres.map(elem=>{
    return <span>{elem} | </span>
    })}
    </div>
    <div className='Summary-Network'><span className='Heading'>Network : </span>{show.network.name}({show.network.country.name}) </div>
    <div className='Summary-Langauge'><span className='Heading'>Language : </span>{show.language}</div>
    <div className='Summary-Premiered'><span className='Heading'>Released Date :</span> {show.premiered}</div>
    <div className='Summary-Rating'><span className='Heading'>Rating :</span> {show.rating.average} / 10</div>
    <div className='Summary-Runtime'><span className='Heading'>Sechdule :</span> {show.schedule.days.map(elem=>{
      return <span>{elem} </span>
    })} At {show.schedule.time}({show.runtime} Min)</div>
    
    <div className='Summary-Status'><span className='Heading'>Status :</span> {show.status} On {show.ended}</div>
    <div className='Summary-Type'><span className='Heading'>Show Type :</span> {show.type}</div>
    <div className='Summary-Official'><span className='Heading'>Official Site :</span> <a href={show.officialSite} target='_blank'>Click Here To Know More</a></div>
    <p><b><h2>Summary :</h2></b> {show.summary}</p>
    
    <div className='btns'>
     <button className='Book-Ticket' onClick={handleBookTicket}>Book Ticket</button>
     <button className='Book-Ticket'>
      <Link to="/">Go Back</Link>
     </button>
      </div>
      </div>
    </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowSummary;
