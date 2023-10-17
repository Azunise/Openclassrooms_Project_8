import Banner from "../../components/Banner";
import imgBanner from "../../assets/banner_about.jpg";
import collapseData from "../../data/collapse__data.json";
import Collapse from "../../components/Collapse";

function APropos() {
    return (
      <main>
        <div className="containerAbout">
          <Banner cover={imgBanner} title=""/>
          

          <div className="collapse">
            
              {collapseData.map((item) => {
                
                return (
                  <div className="collapse__container" key={item.id}>
                    <Collapse title={item.title}>{item.content}</Collapse>
                  </div>
                );
              })}
            
          </div>
        </div>
          
      </main>
      

    )
  }
  
  export default APropos