import React, { useEffect, useState } from 'react'
import './row.css'
import axios from '../../../utils/axios'


import movieTrailer from 'movie-trailer';

import YouTube from 'react-youtube';


function Row({title, fetchUrl, isLargeRow}) {

    const [movies, setMovie] = useState([]);



    const [trailerUrl, setTrailerUrl] = useState('');
    const [showPlayer, setShowPlayer] = useState(true);

    const base_url = "https://image.tmdb.org/t/p/original";


    useEffect(
        ()=>{
          (async () => {
            try {
                console.log(fetchUrl)
                const request = await axios.get(fetchUrl);
                console.log(request)
                setMovie (request.data.results);
            }
            catch (error){
                console.log("error", error)
            }
          })()
        }, [fetchUrl]
    );
 
   const handleClick = (movie)=>{
    if(trailerUrl){
        setTrailerUrl('')
        setShowPlayer(false);
    } else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then(
          (url)=>{
            console.log(url);

            const urlParams = new URLSearchParams (    new URL(url).search        );
          
            console.log(urlParams)
            console.log(urlParams.get('v'));
            setTrailerUrl(urlParams.get('v'))
            setShowPlayer(true); 
        }
      )
    }
   }

   const handleClose = () => {
     setShowPlayer(false);
   };

   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
        autoplay: 1,
    }
   }




  return (
    <div className="row">

      <h1>{title}</h1>

      <div className="row_posters">
        {movies?.map(
          (movie, i) => (
          <img
            onClick={() => handleClick(movie)}

            key={i}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            
          />
        ))}
      </div>


      {showPlayer && trailerUrl && (
        <div style={{ padding: "40px", position: "relative" }}>

          <button onClick={handleClose} className="close-button ">
            ×
          </button>
          
          <YouTube videoId={trailerUrl} opts={opts} />

        </div>
      )}



    </div>
  );
}

export default Row
