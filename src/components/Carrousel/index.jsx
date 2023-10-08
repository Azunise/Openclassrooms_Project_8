import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Banner from "../Banner";

library.add(faChevronLeft, faChevronRight);

function Carrousel(props) {
    const [current, setCurrent] = useState(0);
    const lengthArray = props.pictures.length;
    
    

    if (lengthArray === 0) {return null;}
    else {
        return (

        <div className='carrousel__container'>

            {lengthArray !== 1 && 
            <p className="leftArrow" onClick={() => setCurrent((current+lengthArray-1)%lengthArray)}>
            <FontAwesomeIcon icon="chevron-left" />
            </p>}

            {lengthArray !== 1 && 
            <p className="rightArrow" onClick={() => setCurrent((current+1)%lengthArray)}>
            <FontAwesomeIcon icon="chevron-right" />
            </p>}


            {lengthArray !== 1 && 
            <div className="current__counter">
                {current + 1}/{lengthArray}
            </div>}

            
            {props.pictures.map((image, index) => {
                return (
                <div className={`banner ${index === current ? "banner__active" : "banner__passive"}`}
                    key={index}
                    
                >
                    
                
                    {index === current && <Banner cover={image} hasDarken={false}  />}
                   
                                      
                    
                    
                </div>
                );
            })}

        </div>
        






    )
        
    }

    
  

}

export default Carrousel