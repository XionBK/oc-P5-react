import {useParams} from "react-router-dom";

export function FicheLogement () {
    const {id} = useParams()

    return <div>
        <h1>Fiche logement : {id}</h1>
    </div>
}