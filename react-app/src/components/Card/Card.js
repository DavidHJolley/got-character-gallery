import React from 'react';
import { Card } from 'react-bootstrap';
import './CardElement.css'

const CardElement = ({ image, title, description, link }) => {
  return (
    <div className='col-md-4 my-4'>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ userSelect: "none", textDecoration: "none", color: 'black' }}>
        <Card className='card-zoom' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', maxHeight: 250, minHeight: 250 }}>
          <div className='overlay'></div>
          <Card.Body>
            <div className='translucent'>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
};


export default CardElement;