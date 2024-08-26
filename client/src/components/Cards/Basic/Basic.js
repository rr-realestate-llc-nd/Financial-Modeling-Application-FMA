import React from 'react';

const Card = ({ title, content, image }) => {
    return (
        <div className="card">
            {image && <img src={image} alt={title} />}
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default Card;