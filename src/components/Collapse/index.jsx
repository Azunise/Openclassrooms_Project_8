import React, { useState } from "react";
import arrowDown from "../../assets/arrow-down.png"
import arrowUp from "../../assets/arrow-up.png"


function Collapse (props) {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    
  <div className="collapse__contained">
    <div className="collapse__title">
      <h2>{props.title}</h2>
      <div onClick={display}>
        {isOpen ? (<img src={arrowDown} alt='an arrow, pointing right'/>) : (<img src={arrowUp} alt='an arrow, pointing right'/>)}
      </div>
    </div>
    
    <div className="collapse__dropdown" style={{maxHeight: isOpen ? 200 : 0 }}>
      <div>{props.children}</div>
    </div>
  </div>
  
  );
};

export default Collapse;