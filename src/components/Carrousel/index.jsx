import React, { useState } from 'react';
import arrowPrevious from "../../assets/arrow-previous.png"
import arrowNext from "../../assets/arrow-next.png"
import Banner from "../Banner";



function Carrousel(props) {
    const [current, setCurrent] = useState(0);
    const lengthArray = props.pictures.length;
    
    

    if (lengthArray === 0) {return null;}
    else {
        return (

        <div className='carrousel__container'>

            {lengthArray !== 1 && 
            <p className="leftArrow" onClick={() => setCurrent((current+lengthArray-1)%lengthArray)}>
            <img src={arrowPrevious} alt='an arrow, pointing left'/>
            </p>}

            {lengthArray !== 1 && 
            <p className="rightArrow" onClick={() => setCurrent((current+1)%lengthArray)}>
            <img src={arrowNext} alt='an arrow, pointing right'/>
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