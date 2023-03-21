import React from 'react';
import CardElement from '../Card/Card';
import cardData from '../Card/cardJson'; // Import the card data from the JSON file

function Main({ refProps }) {
  return (
    <main ref={refProps}>
      <div className="container">
        <div className="row">
          {/* Map over the card elements data to render each card element */}
          {cardData.map((card) => (
            <CardElement
              key={card.title}
              title={card.title}
              image={card.image}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Main;
