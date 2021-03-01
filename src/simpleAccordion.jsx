import React,{useState} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
 import AddIcon from '@material-ui/icons/Add';
 import CloseIcon from '@material-ui/icons/Close';
 import {Button,Checkbox} from '@material-ui/core';
import "./Sidebar.css";

export default function SimpleAccordion(props) {

  const Array=props.arrayName;
  console.log(Array);

  const items=[];
  for(var i=0;i<2;i++)
  {
    items.push(<div>
      <Checkbox key={Array[i].key} value="checkedA"/>
      <span style={{color:"#999999"}}>{Array[i].Name}</span>
      </div>)
  }
    
   const[iconName,setIcon]= useState(false);
   const[extra,setExtra]= useState(true);
   const[count,setCount]= useState(props.arrayName.length-2);
   function handleClick(){
     setIcon(!iconName);
   }
   function handleExtra(){
     setExtra(!extra);
     setCount(0);
   }

    return (
       
      <React.Fragment>
    
        <Accordion style={{boxShadow:"0px 0px 0px "}} >
          <AccordionSummary expandIcon={iconName ? <CloseIcon /> : <AddIcon/>} onClick={handleClick}>
            <Typography style={{color:"#333333",fontWeight:"bolder"}}>{props.children}</Typography >
          </AccordionSummary>
          <AccordionDetails >
            <Typography>
              
              {extra ? items :    props.arrayName.map((brand,key)=> {
           return(  <div>
               <Checkbox key={brand.key} value="checkedA"/>
               <span style={{color:"#999999"}}>{brand.Name}</span>
               </div>)
             })}  
             <Button style={{color:"#FF7F7F"}} onClick={handleExtra}>+{count} more</Button> 
            

           </Typography>
          </AccordionDetails>
          </Accordion>
         
          </React.Fragment>
    
  );
}