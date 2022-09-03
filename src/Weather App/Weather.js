import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import "./Weather.css";
 
 const Weather = () => {

  const[Weatherdata,setWeatherdata] = useState({
    main:{},
    weather:[{}],
  });


  useEffect(()=>{
    async function getdata(){
      const Api = 'https://api.openweathermap.org/data/2.5/weather?&appid=e930d577c3c20d695a459f25e8a25b3f&q=kalluvazhi,India&units=metric'

      try{
        let response = await Axios.get(Api);
        setWeatherdata(response.data);
        console.log(response.data)
      }catch(err){
        console.log(err)
      }
    }
    getdata();

  },[])
   return (
    <div className="home-container">
    <div className="main-container">
      <div className="card">
        <h1>{Weatherdata.name}</h1>
        <h1>{`${Math.round(Weatherdata.main.temp)}`}&deg;C</h1>
        <h1>{Weatherdata.weather[0].main}</h1>
        <h6>{Weatherdata.weather[0].description}</h6>
        
      </div>
        

    </div>
    
  </div>
   )
 }
 
 export default Weather
 