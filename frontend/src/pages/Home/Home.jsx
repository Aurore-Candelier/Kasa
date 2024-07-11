import { useEffect, useState } from 'react';
import './Home.css';
import img from '../../assets/background-Image.png';
import Card from '../../components/Card/Card';

const Home = () => {

    return (
        <>
            <div className='image-container'>
                <img src={img} alt='Image rochers' className='background-image' />
                <div className='centered-text'>Chez vous, partout et ailleurs</div>
            </div>
            <Card />
        </>
    );
}

export default Home;
