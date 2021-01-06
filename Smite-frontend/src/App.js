
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import GodList from "./components/GodList"
import Searchbar from "./components/Searchbar"
import GodProfile from "./components/GodProfile"
import "./App.css"
import axios from "axios";
function App() {
  const [god, setGod] = useState([])
  const [godId, setGodId] = useState("")
  const [query, setQuery] = useState("");
  const [godRoute, setGodRoute] = useState([])


 




  return (

<Router>
  <Switch>
  <Route exact path="/">
    <div className="App">
      <Searchbar query = {query} setQuery={setQuery}/>
      <GodList query = {query} 
      god={god}
      setGod={setGod}
      setGodId={setGodId}
      />
      
    </div>
  
  </Route>

  {/* <Route path = {`/${godId.Name}`.split(" ").join("")}> */}
     <Route path = "/:id" >
  <div>
<GodProfile/>
</div>
  </Route>
  </Switch>
  </Router>
  );
}

export default App;
