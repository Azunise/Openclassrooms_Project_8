


function Host(props) {

    return (
        <div className="hostData">
            <p>{props.name}</p>
            <div className="pfpHost" style={{backgroundImage:`url(${props.picture})`}}></div>
        </div>

    )

    
    

}

export default Host