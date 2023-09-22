import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Collapse (props) {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    
  <div className="collapse__contained">
    <div className="collapse__title">
      <h2>{props.title}</h2>
      <p onClick={display}>
        {isOpen ? (/*<FontAwesomeIcon icon=*/"chevron-down"/* />*/) : (/*<FontAwesomeIcon icon=*/"chevron-up"/* />*/)}
      </p>
    </div>
    
    <div className="collapse__dropdown" style={{bottom: (!isOpen*70) + 5}}>
      {isOpen && <p>{props.content}</p>}
    </div>
  </div>
  );
};

export default Collapse;