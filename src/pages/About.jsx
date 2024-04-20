import { Banner } from "../components/Banner";
import imgBann from '../assets/bg-banner-about.jpg'
import { Collapse } from "../components/Collapse";
import  aboutList  from "../assets/about.json";

export function About () {

    const collapses = aboutList.map(
        about => <Collapse key={about.id} title={about.title} description={about.content}/>
    )

    return <div>
        <Banner image={imgBann} />
        {collapses}
    </div>
}