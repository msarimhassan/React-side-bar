import React from "react";
 
import SimpleAccordion from "./simpleAccordion";
import "./Sidebar.css";
import {brands,stores,catogeries,price} from "./allData.js";

function App() {
  console.log("I am in App component", brands);
// <hr style={{ color: "#999999"}}/>
  return (
    <div className="sidenav">
    <SimpleAccordion  children="Categories" arrayName={catogeries} />
   
   <SimpleAccordion  children="Brands" arrayName={brands}/>
  
    <SimpleAccordion  children="Stores" arrayName={stores} /> 
    
    <SimpleAccordion  children="Price" arrayName={price} />  
</div>
  );
  }
  export default App;
