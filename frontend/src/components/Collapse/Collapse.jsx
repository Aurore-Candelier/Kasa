import "./Collapse.css"
import arrow from "./../../assets/arrow.svg"
import { useState } from "react"


export const Collapse = ({title, content}) => {
    const [open, setOpen] = useState(false); // Etat local pour gérer l'ouverture/fermeture du contenu 

    // Fonction de gestion du clic sur la flèche pour basculer l'état 'open'
    const handleClick = () => {
        setOpen(!open) // Inverse l'état 'open' à chaque clic
    }

    return (
        <div className="collapse">
            <div className="collapse-title">
                <h2 className="collapse-title__text">{title || "Default Title"}</h2>
                <img src={arrow} alt="arrow" onClick={handleClick} className={open ? 'opened': ''}/>
            </div>
            {open && <div className="collapse-content">
                {content || "Default Content"}
            </div>}
        </div>
    )
}