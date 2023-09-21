//import background from "../../assets/Background.jpg"

function Banner(props) {
    return (
        <div style={{backgroundImage:`url(${props.cover})`}} className="banner">
            <h2>{props.title}</h2>
        </div>
    )
}

export default Banner