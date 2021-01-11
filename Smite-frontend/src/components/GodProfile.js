import React, { useEffect, useState } from "react";
import axios from "axios"
import "./GodProfile.css"
import { useParams } from 'react-router-dom';



const GodProfile = ({gods}) => {
  const [god, setGod] = useState();
  const {id} = useParams();
  console.log({id})

  
  useEffect(() => {


       axios
        .get(`http://localhost:4000/gods/${id}`)
        .then(response => {
        setGod(response.data)
          console.log(response.data);
        })
      

  },[id]);

  


  if (!god) {
    return <div>Loading god information...</div>;
  }
return(
    <div className = "GodProfileContainer"> 
    
    <div>
     

    <img src={god.godCard_URL} alt="gods" className = "GodCardImg"></img>
 
    </div>
    <div>

    <h2 className="GodName">{god.Name}</h2>
      <p className="GodName">{god.Title}</p>
      <div className = "GodProfileInfo">
          <div className="GodName"><p>Role: {god.Roles}</p></div>
          <div className="GodName"><p>Pros: {god.Pros}</p></div>
      </div>
    </div>


  </div>
)
}

export default GodProfile