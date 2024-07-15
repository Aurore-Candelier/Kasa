import "./House.css";
import { Collapse } from '../../components/Collapse/Collapse';
import Slideshow from "../../components/Slidershow/Slideshow";

const pageHouse = () => {
    return (
        <>
            <div className="house-container">
                <Slideshow />
                <div className="collapse-house">
                    <Collapse title="Description  " content=" " />
                    <Collapse title="Équipement " content=" " />
                </div>
            </div>
            </>
            )
}

            export default pageHouse;