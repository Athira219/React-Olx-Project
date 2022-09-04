import React, { useEffect } from "react";
import YouTube from "react-youtube";
import "./RowPost.css";
import {  imageUrl,API_KEY } from "../..//Constants/Constants";
import axios from "../../axios";
import { useState } from "react";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlid,setUrlId] = useState('')
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert('network error')
      });
  }, [props.url]);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length !==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Array empty')
      }
    })

  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => 
          <img 
            onClick={()=>handleMovie(obj.id)}
            className={props.isSmall ? 'smallPoster':"poster"} alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
            
          />
        )}
      </div>
      {urlid && <YouTube opts={opts}  videoId={urlid.key} />}
    </div>
  );
}

export default RowPost;
