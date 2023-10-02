import pictureData from "../../data/logement.json";
import Carrousel from "../../components/Carrousel";
import Rate from "../../components/Rate";
import Host from "../../components/Host";
import { Routes, Route, useParams } from 'react-router-dom';
import Collapse from "../../components/Collapse";
import Tag from "../../components/Tag";



function Logement() {


  const { id } = useParams();

  const currentPage = pictureData.find((element) => element.id === "c67ab8a7");

  console.log(currentPage.pictures.length)


  const breakedEquipments = currentPage.equipments.map((attribute, index) => {
    const islast = currentPage.equipments.length === (index + 1);
    return !islast ? <>{attribute}<br/></> : attribute;
  })


  return (
    
    <main>
      <div className="carrouse">
        
        
      <Carrousel pictures={currentPage.pictures} />

      </div>

      <div className="partdeux">



      

        <section className="ficheLogement">
              <div className="descriptionInfo">
                <h2 className="titleLogement">{currentPage.title}</h2>
                <p className="locationLogement">{currentPage.location}</p>
                <Tag array={currentPage.tags} /> 
              </div>

              <div className="infoHost">
                

                  <Host
                    name={currentPage.host.name}
                    picture={currentPage.host.picture}
                  />

                
                
                  <Rate rating={currentPage.rating} />
                
              </div>

              
              
        </section>
        
        <div className="collapseLogement">
          <Collapse content={currentPage.description} title={"Description"} />

          
          <Collapse content={breakedEquipments} title={"Équipements"} />

        </div>
      </div>

      
    </main>
  )
}

export default Logement