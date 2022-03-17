import React from 'react';
import './Country.css';
const Country = (props) => {
    const {flags, name, population, area } = props.country;
    return (
        <div className='col-4 '>
            <div className='card shadow bg-light'>
                <img src={flags.png} className='card-img-top' alt="..."/>
                 <div className='card-body'>
                    <h2>{name.common}</h2>
                    <p>Population: {population}</p>
                    <p>Area: {area}</p>
                </div>
            </div>
        </div>
    );
};

export default Country;