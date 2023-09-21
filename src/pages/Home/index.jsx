import Banner from "../../components/Banner";
import Card from "../../components/Card";
import logements from "../../data/logement.json";
import imgBanner from "../../assets/banner_main.jpg";


function Home() {
    console.log(logements);
    return (
      <main>
        <Banner cover={imgBanner} title="Chez vous, partout et ailleurs"/>
        <article id="gallery">
          {logements.map((logement) => ( 
            <Card cover={logement.cover} title={logement.title}/> 
          ))}
        </article>
      </main>
      
      
    )
  }
  
export default Home


