import React,{useState} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
 import AddIcon from '@material-ui/icons/Add';
 import CloseIcon from '@material-ui/icons/Close';
 import {Checkbox} from '@material-ui/core';
import "./Sidebar.css";

export default function SimpleAccordion(props) {
    
   const[iconName,setIcon]= useState(false);
 
   function handleClick(){
     setIcon(!iconName);
   }
    return (
       
      <React.Fragment>
    
        <Accordion style={{boxShadow:"0px 0px 0px "}} >
          <AccordionSummary expandIcon={iconName ? <CloseIcon /> : <AddIcon/>} onClick={handleClick}>
            <Typography style={{color:"#333333",fontWeight:"bolder"}}>{props.children}</Typography >
          </AccordionSummary>
          <AccordionDetails >
            <Typography>
              { props.arrayName.map((brand,key)=> {
           return(  <div>
               <Checkbox key={brand.key} value="checkedA"/>
               <span style={{color:"#999999"}}>{brand.Name}</span>
               </div>)
             })}           
             <p>+{props.arrayName.length} more</p> 
           </Typography>
          </AccordionDetails>
          </Accordion>
         
          </React.Fragment>
    
  );
}