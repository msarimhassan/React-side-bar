import React from "react";
 
import SimpleAccordion from "./simpleAccordion";
import "./Sidebar.css";
import {brands,stores,catogeries,price} from "./allData.js";

function App() {
  console.log("I am in App component", brands);

  return (
    <div className="sidenav">
    <SimpleAccordion  children="Categories" arrayName={catogeries} />
   <hr style={{color: "#999999"}}/>
   <SimpleAccordion  children="Brands" arrayName={brands}/>
   <hr style={{ color: "#999999"}}/>
    <SimpleAccordion  children="Stores" arrayName={stores} /> 
    <hr style={{ color: "#999999"}}/>
    <SimpleAccordion  children="Price" arrayName={price} />  
</div>
  );
  }
  export default App;
