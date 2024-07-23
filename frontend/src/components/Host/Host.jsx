import React from 'react';
import './Host.css';

const Host = ({ name, picture}) => {
    return (
        <div className='host-container'>
            <div className='host-name'></div>
            <p className='host-name'>{name}</p>
            <img className='host-picture' src={picture} alt={name} />
        </div>
    );
}

export default Host;