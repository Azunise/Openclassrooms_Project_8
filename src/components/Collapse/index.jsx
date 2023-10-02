import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronDown, faChevronUp);


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
        {isOpen ? (<FontAwesomeIcon icon="chevron-down" />) : (<FontAwesomeIcon icon="chevron-up" />)}
      </p>
    </div>
    
    <div className="collapse__dropdown" style={{maxHeight: isOpen ? 200 : 0 }}>
      <p>{props.content}</p>
    </div>
  </div>
  
  );
};

export default Collapse;