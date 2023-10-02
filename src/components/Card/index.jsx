

function Card(props) {
    return (
        <div style={{backgroundImage:`url(${props.cover})`}} className="card">
            <div className="shadowftext">
                <h3>{props.title}</h3>
            </div>
            

        </div>
    )
}

export default Card




