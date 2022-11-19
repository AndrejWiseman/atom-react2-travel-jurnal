import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <img src={`images/${props.pod.image}`} alt="slika" className='slika' />
            <div className="opis">
                <p className='gornji'><i className="fa-solid fa-location-dot pokazivac"></i> <span className="mesto">{props.pod.location}</span> <span className="map"><a
                    href={props.pod.map} target="_blank">View on Google Maps</a></span></p>
                <h1>{props.pod.title}</h1>
                <p className='o-lokaciji'>{props.pod.description}</p>
            </div>
        </div>
    )
}
export default Card;