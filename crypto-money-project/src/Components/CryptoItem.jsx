
import React from 'react';
const CryptoItem = ({ name, symbol, price, image, priceChange }) => {
  return (
    <li>
      <img src={image} alt={`${name} icon`} />
      <div>
        <h2>{name}</h2>
        <p>{symbol}</p>
      </div>
      <div>
        <p>${price.toLocaleString()}</p>
        <p className={priceChange > 0 ? 'green' : 'red'}>
          {priceChange.toFixed(2)}%
        </p>
      </div>
    </li>
  );
};
export default CryptoItem;