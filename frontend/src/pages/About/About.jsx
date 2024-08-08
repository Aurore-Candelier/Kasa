import './About.css';
import img from '../../assets/image-about.png';
import { Collapse } from '../../components/Collapse/Collapse';
import Banner from '../../components/Banner/Banner';

const About = () => {
    return (
        <div className='about-container'>
            <Banner imgSrc={img} altText='Image montagne' />
            <div>
                <Collapse title="Fiabilité " content="Les annonces postées sur Kasa garantisent une fiabilité totale. Les photos sont conformes aux logements, 
                et toutes les information sont régulièrements vérifiées par nos équipes." />

                <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage entra
                înera une exclusion de notre plateforme." />

                <Collapse title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage entra
                înera une exclusion de notre plateforme." />
                
                <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
                En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards  sont bien respectés. Nous organisons égalements des ateliers sur la séurité domestique pour nos hôtes." />
            </div>
        </div>
    );
}

export default About;
