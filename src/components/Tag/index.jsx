

function Tag(props) {
    
    const listTags = props.array.map((element) => <li key={element}>{element}</li>)
    return(
        <ul className="tagList">{listTags}</ul>
    )
}

export default Tag;