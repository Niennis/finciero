// Dependencies
import React from 'react';

const CommercesItem = ({ image, nameCommerce, onClick }) => (
  <div className="comCont" >
    <img src={image} alt={nameCommerce} onClick={onClick} />
  </div>
)

export default CommercesItem;