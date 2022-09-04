import React from "react";
import NavBar from "./ComponentsN/NavBar/NavBar";
import {action, originals,horror, comedy} from './urls'
import "./App.css";
import Banner from "./ComponentsN/Banner/Banner";
import RowPost from "./ComponentsN/RowPost/RowPost";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={originals}  title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      
      <RowPost url={horror} title='Horror' isSmall />

    </div>
  );
}

export default App;