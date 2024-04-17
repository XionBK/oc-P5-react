export function Card ({logement}) {
    return <a href={'/fiche-logement/' + logement.id} >
        <article className="card">
            <img src={logement.cover} alt={logement.title} />
            <h2 className="card-title">{logement.title}</h2>
        </article>
    </a>
}