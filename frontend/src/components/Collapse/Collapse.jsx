import "./Collapse.css"
import arrow from "./../../assets/arrow.svg"
import { useState } from "react"


export const Collapse = ({title, content}) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className="collapse">
            <div className="collapse-title">
                <h2 className="collapse-title__text">{title || "Default Title"}</h2>
                <img src={arrow} alt="arrow" onClick={handleClick} className={open ? 'opened': ''}/>
            </div>
            {open && <div className="collapse-content">
                <p>{content || "Default Content"}</p>
            </div>}
        </div>
    )
}