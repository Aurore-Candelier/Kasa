import "./Collapse.css"
import arrow from "./../../assets/arrow.svg"
import { useState } from "react"


export const Collapse = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className="collapse">
            <div className="collapse-title">
                <h2 className="collapse-title__text">Titre</h2>
                <img src={arrow} alt="arrow" onClick={handleClick} />
            </div>
            {open && <div className="collapse-content">
                <p>Contenu</p>
            </div>}
        </div>
    )
}