import React from "react";
import { Button, Checkbox } from "@material-ui/core";
import SimpleAccordion from "./simpleAccordion";
import "./Sidebar.css";
import { brands } from "./BrandNames";
import { brands1 } from "./BrandNames";
import storeName from "./storeName";

function App() {
  console.log("I am in App component", brands);

  return (
    <React.Fragment>
      <div className="sidenav">
        <SimpleAccordion children="Categories" brands={brands} />
        <hr style={{ color: "#999999" }} />
        <SimpleAccordion children="Brands" brands={brands} />
        <hr style={{ color: "#999999" }} />
        <SimpleAccordion children="Stores" brands={storeName} />
        <hr style={{ color: "#999999" }} />
        <SimpleAccordion children="Price" brands={brands1} />
      </div>
    </React.Fragment>
  );
}

export default App;
