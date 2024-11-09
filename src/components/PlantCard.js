import React, { useState } from "react";

function PlantCard({ plant, setPlants }) {
  const { id, name, image, price } = plant;
  const [isSoldOut, setIsSoldOut] = useState(false);

  // Handle marking a plant as sold out
  const toggleSoldOut = () => {
    setIsSoldOut(!isSoldOut);
  };

  // Delete a plant
  const deletePlant = () => {
    fetch(`http://localhost:6001/plants/${id}`, { method: 'DELETE' })
      .then(() => {
        setPlants((prevPlants) => prevPlants.filter((p) => p.id !== id));
      });
  };

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {isSoldOut ? (
        <button className="secondary" onClick={toggleSoldOut}>
          Out of Stock
        </button>
      ) : (
        <button className="primary" onClick={toggleSoldOut}>
          In Stock
        </button>
      )}
      <button onClick={deletePlant}>Delete</button>
    </li>
  );
}

export default PlantCard;
