import imgBann from '../assets/bg-banner-home.jpg'
import { Banner } from "../components/Banner";
import { Card } from "../components/Card";

export function Home ({logements}) {
    const cards = logements.map(logement => <Card key={logement.id} logement={logement}/>)

    return <div>
        <Banner title="Chez vous, partout et ailleurs" image={imgBann} />
        <div className='logements-cards'>{cards}</div>
    </div>
}