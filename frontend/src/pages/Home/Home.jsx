import { useEffect, useState } from 'react';
import './Home.css';
import img from '../../assets/background-Image.png';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';

const Home = () => {

    return (
        <>
            <Banner imgSrc={img} altText='Image rochers' text='Chez vous, partout et ailleurs' />
            <Card />
        </>
    );
}

export default Home;
