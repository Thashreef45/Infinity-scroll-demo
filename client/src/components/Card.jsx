import React from 'react';
import './card.css';

const Card = ({image,title,time='test'}) => {
    return (
        <div className='card' >
              <div className='card-left'>
                <img className='image' src={image} />
              </div>
              <div className='card-right'>
                <p>{title}</p>
                {/* <p>{time}</p> */}
              </div>
        </div>
    );
}

export default Card;
