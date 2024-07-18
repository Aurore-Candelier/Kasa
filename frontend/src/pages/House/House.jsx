import "./House.css";
import { Collapse } from '../../components/Collapse/Collapse';
import Slideshow from "../../components/Slidershow/Slideshow";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function fetchHouse (param, setData, setLoading) {
    fetch('http://localhost:8080/api/properties/'+param.id)
            // Convertit la réponse en JSON
            .then((response) => response.json())
            // Traite les données JSON récupérées
            .then((data) => {
                console.log(data)
                setData(data);  // Met à jour l'état 'data' avec les données récupérées
                setLoading(false);  // Indique que le chargement est terminé
            })
            // Capture les erreurs potentielles
            .catch((error) => {
                console.error('Erreur:', error);  // Affiche l'erreur dans la console
                setLoading(false);  // Indique que le chargement est terminé (même en cas d'erreur)
            });
}
const House = () => {
    const param= useParams()
    const [data, setData] = useState([]);  // État pour stocker les données récupérées de l'API
    const [loading, setLoading] = useState(true);  // État pour indiquer si les données sont en cours de chargement
    
    // Charge les données depuis l'API lors du montage du composant
    useEffect(() => {
        fetchHouse(param, setData, setLoading)
    }, []);
    return (
        <>
            <div className="house-container">
                {/* <Slideshow /> */}
                <div className="collapse-house">
                    <Collapse title="Description  " content=" " />
                    <Collapse title="Équipement " content=" " />
                </div>
            </div>
            </>
            )
}

            export default House;