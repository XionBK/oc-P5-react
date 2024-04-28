export function Tags ({tags}) {

    const tagsList = tags.map((tag, index) => (
        <li key={index}>{tag}</li>
    ))
    
    return <ul className="tags">
        {tagsList}
    </ul>
}