import {useNavigate, useParams} from "react-router-dom";
import { Collapse } from "../components/Collapse";
import { useEffect } from "react";
import { Slideshow } from "../components/Slideshow";
import { Tags } from "../components/Tags";
import { Rating } from "../components/Rating";
import { Person } from "../components/Person";

export function FicheLogement ({logements}) {

    const {id} = useParams()
    const navigate = useNavigate()

    const [logement] = logements.filter(logement => {
        return logement.id == id
    })

    useEffect(() => {
        if (!logement) {
            navigate("404")
        }
    }, []);

    if (!logement) {
        return null
    }

    const equipments = logement.equipments.map((equipment, index) => (<li key={index}>{equipment}</li>))

    return <div>
        <Slideshow pictures={logement.pictures} />
        <div className="logement-info" >
            <div className="logement-name">
                <h1 className="title">{logement.title}</h1>
                <h2 className="logement-location">{logement.location}</h2>
                <Tags tags={logement.tags} />
            </div>
            <div className="logement-host" >
                <Rating rating={logement.rating} />
                <Person host={logement.host} />
            </div>
        </div>
        <div className="collapse-parent">
            <Collapse title="Description"><p>{logement.description}</p></Collapse>
            <Collapse title="Équipements"><ul>{equipments}</ul></Collapse>
        </div>
    </div>
}