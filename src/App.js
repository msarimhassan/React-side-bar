import React from "react";
import SimpleAccordion from "./simpleAccordion";
import "./Sidebar.css";
import { brands, stores, catogeries, price } from "./allData.js";
import data from "./Data.json";

function App() {
  console.log("I am the Json Data", data);
  // <hr style={{ color: "#999999"}}/>
  return (
    <div className="sidenav">
      <SimpleAccordion children="Categories" arrayName={catogeries} />

      <SimpleAccordion children="Brands" arrayName={brands} />

      <SimpleAccordion children="Stores" arrayName={stores} />

      <SimpleAccordion children="Price" arrayName={price} />
    </div>
  );
}
export default App;
