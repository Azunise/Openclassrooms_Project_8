import Banner from "../../components/Banner";
import Card from "../../components/Card";
import logements from "../../data/logement.json";
import imgBanner from "../../assets/banner_main.jpg";
import { Link } from "react-router-dom";


function Home() {
    
    return (
      <main>
        <div className="containerHome">  
          <Banner cover={imgBanner} title="Chez vous, partout et ailleurs" hasDarken={true} />
          <div className="containerGallery">
            <article id="gallery">
              {logements.map((logement) => (
                <Link to={`/logement/${logement.id}`} key={logement.id}>
                  <Card cover={logement.cover} title={logement.title}/> 
                </Link>
                
              ))}
            </article>
          </div>
        </div>
      </main>
      
      
    )
  }
  
export default Home


