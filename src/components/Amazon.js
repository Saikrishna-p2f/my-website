import React, { useState } from "react";
// import list from "./data";
//import list from "./data"
import list1 from "./VlsiDetails";
import list2 from "./EmbeddedDetails";
import list3 from "./DataScience";
import list4 from "./Cyber";
import list5 from "./Software";
import Cards from "./card";
import "./amazon.css";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      
      {list1.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
      
      {list2.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
      
      {list3.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
      {list4.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
      {list5.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;