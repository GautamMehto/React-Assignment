// ShowList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);
// console.log(shows)
  return (
    <div className="App">
      <h1>Show List</h1>
      <div className='List-Container'>
        {shows.map((elem) => (
         <div key={elem.show.id} className="List">
          {elem.show.image ?
          <img src={elem.show.image.medium} className='List-Image'alt={elem.show.name}/>: <div className='List-Image'>No Image Found</div>}
            <Link to={`/show/${elem.show.id}`} target="_blank">
              {elem.show.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
