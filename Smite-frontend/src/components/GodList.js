import React, { useEffect } from "react";
import axios from "axios"
import GodCard from "./GodCard"




export default function GodList({query, god, setGod, setGodId}) {


  


  useEffect(() => {
    
    axios.get('http://localhost:4000')
      .then(response => {
        console.log(response.data);
        const characters = response.data.filter(character =>
          character.Name.toLowerCase().includes(query.toLowerCase())
        );
       
        setGod(characters);
      });
    }, [query]);

  // useEffect(() => {
    
  //   api
  //     .ping()
  //     .then(response => {
  //       console.log(response);
        
       
        
  //     });
  //   }, [query]);
  // useEffect (() => {

  //   axios.get("https://rickandmortyapi.com/api/character")
  //   .then(response => {
  //       console.log(response);
  //       const characters = response.data.results.filter(character =>
  //         character.name.toLowerCase().includes(query.query.toLowerCase())
  //       );
       
  //       setGod(characters);
  //     });
  //   }, [query]);



  return (

    <div className="GodMainDiv">

      {god.map(gods => {
        

        return <GodCard setGodId= {setGodId} gods={gods} key={gods.id} />
        
        
      })}
    </div>

  )
}


