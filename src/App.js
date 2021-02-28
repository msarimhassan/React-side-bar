import React from "react";
import { Button,Checkbox} from "@material-ui/core";
import SimpleAccordion from "./simpleAccordion";
import "./Sidebar.css";
import brands from "./BrandNames";

function App() {
  return (
    <div className="sidenav">
    <SimpleAccordion children="Categories" arrayName={brands} />
   <hr style={{color: "#999999"}}/>
   <SimpleAccordion children="Brands" />
   <hr style={{ color: "#999999"}}/>
    <SimpleAccordion children="Stores"  /> 
    <hr style={{ color: "#999999"}}/>
    <SimpleAccordion children="Price"  />  
</div>
  );
}

export default App;
