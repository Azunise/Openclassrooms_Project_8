import pictureData from "../../data/logement.json";
import Carrousel from "../../components/Carrousel";
import { Routes, Route, useParams } from 'react-router-dom';



function Logement() {


  const { id } = useParams();

  const currentPage = pictureData.find((element) => element.id === "c67ab8a7");

  console.log(currentPage.pictures.length)
  return (
    
    <main>
      <div className="carrouse">
        
        
      <Carrousel pictures={currentPage.pictures} />

      </div>

      
      
    </main>
  )
}

export default Logement