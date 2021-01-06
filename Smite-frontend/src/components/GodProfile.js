import React, { useEffect, useState } from "react";
import axios from "axios"
import "./GodProfile.css"
import { useParams } from 'react-router-dom';



const GodProfile = ({gods}) => {
  const [god, setGod] = useState();
  const {id} = useParams();
  console.log({id})

  
  useEffect(() => {
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:4000/${id}`)
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
          <div><p>{god.Roles}</p></div>
          <div><p>{god.Pros}</p></div>
      </div>
    </div>


  </div>
)
}

export default GodProfile