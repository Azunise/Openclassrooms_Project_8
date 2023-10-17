import fullStar from "../../assets/star-full.png";
import emptyStar from "../../assets/star-empty.png";






function Rate(props) {

    
    const rating = parseInt(props.rating, 10);
    const possibles = [1, 2, 3, 4, 5];

   

    return(
        <div className='rate'>
            {possibles.map(function(nthStar){
                if(rating >= nthStar ){
                    return(<img src={fullStar} className='fullStar' key={nthStar} alt="orange-colored rating star"/>)
                }

                else{
                    return(<img src={emptyStar} className='emptyStar' key={nthStar} alt="grey-colored rating star"/>)
                }
            })}
        </div>

    


    );

    
    
}

export default Rate