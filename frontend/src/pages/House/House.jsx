import "./House.css";
import { Collapse } from '../../components/Collapse/Collapse';
import Slideshow from "../../components/Slidershow/Slideshow";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Stars from "../../components/Stars/Stars";

function fetchHouse(param, setData, setLoading) {
    fetch('http://localhost:8080/api/properties/' + param.id)
        // Convertit la réponse en JSON
        .then((response) => response.json())
        // Traite les données JSON récupérées
        .then((data) => {
            console.log(data); // Affiche toutes les données
            console.log(data.equipments);

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
    const param = useParams()
    const [data, setData] = useState({
        description: "",
        equipments: [],
        host: { name: "", picture: "" },
        rating: 0,
    });  // État pour stocker les données récupérées de l'API
    const [loading, setLoading] = useState(true);  // État pour indiquer si les données sont en cours de chargement

    // Charge les données depuis l'API lors du montage du composant
    useEffect(() => {
        if (param.id) {
            fetchHouse(param, setData, setLoading)
        }
    }, [param.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log('etat des données:', data);

    return (
        <>
            <div className="house-container">
                <Slideshow />
                <div className="house-header">
                    <div className="title-location">
                        <h1 className="house-title">{data.title}</h1>
                        <p className="house-location">{data.location}</p>
                    </div>
                    <div className="host-stars-container">
                        <Host name={data.host.name} picture={data.host.picture} />
                        <Stars rating={data.rating} />
                    </div>
                </div>
                {Array.isArray(data.tags) && data.tags.length > 0 && (
                    <Tag tags={data.tags} />
                )}

                <div className="collapse-house">
                    <Collapse title="Description  " content={data.description} />
                    <Collapse title="Équipement ">
                        {Array.isArray(data.equipments) && data.equipments.length > 0 ? (
                            <ul>
                                {data.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>Aucun équipement disponible.</p>
                        )}
                    </Collapse>
                </div>
            </div>
        </>
    )
}

export default House;