import "./House.css";
import { Collapse } from '../../components/Collapse/Collapse';

// const Slides = () => {
    
// }

const pageHouse = () => {
    const equipmentList = (
        <ul className="no-bullets">
            
        </ul>
    );

    return (
        <>
            <div className="collapse-house">
                <Collapse title="Description  " content="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. 
                Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
                />
                <Collapse title="Équipement " content={equipmentList} />
            </div>
        </>
    )
}

export default pageHouse ;