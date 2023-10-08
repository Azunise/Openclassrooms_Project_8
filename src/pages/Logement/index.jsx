import pictureData from "../../data/logement.json";
import Carrousel from "../../components/Carrousel";
import Rate from "../../components/Rate";
import Host from "../../components/Host";
import { useParams } from 'react-router-dom';
import Collapse from "../../components/Collapse";
import Tag from "../../components/Tag";



function Logement() {


  const { currentId } = useParams();
  

  const currentPage = pictureData.find((element) => element.id === currentId);

  


  const listEquipments = currentPage.equipments.map((element) => <li key={element}>{element}</li>) 
    


  return (
    
    <main>
      <div className="containerHousing">


      
        <div className="carrouse">
          
          
        <Carrousel pictures={currentPage.pictures} />

        </div>

        <div className="partdeux">



        

          <section className="cardLogement">
                <div className="descriptionInfo">
                  <h2 className="titleHousing">{currentPage.title}</h2>
                  <p className="locationHousing">{currentPage.location}</p>
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
            <Collapse title={"Description"}>{currentPage.description}</Collapse>

            
            <Collapse title={"Équipements"}>
              <ul className="listEquipments">{listEquipments}</ul>
            </Collapse>

          </div>
        </div>

      </div>
    </main>
  )
}

export default Logement