

function Tag(props) {
    /*const breakedarray = props.array.map((attribute, index) => {
        const islast = props.array.length === (index + 1);
        return !islast ? <>{attribute}<br/></> : attribute;
    })*/
    const listTags = props.array.map((element) => <li key={element}>{element}</li>)
    return(
        <ul className="tagList">{listTags}</ul>
    )
}

export default Tag;