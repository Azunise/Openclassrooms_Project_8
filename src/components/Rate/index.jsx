import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar} from "@fortawesome/free-solid-svg-icons";


library.add(faStar);



function Rate(props) {

    console.log(props.rating);
    const rating = parseInt(props.rating, 10);
    const possibles = [1, 2, 3, 4, 5];

    console.log(rating);
    

    return(
        <div className='rate'>
            {possibles.map(function(nthStar){
                if(rating >= nthStar ){
                    return(<FontAwesomeIcon icon="star" className='fullStar' key={nthStar} />)
                }

                else{
                    return(<FontAwesomeIcon icon="star" className='emptyStar' key={nthStar} />)
                }
            })}
        </div>

    


    );

    
    
}

export default Rate