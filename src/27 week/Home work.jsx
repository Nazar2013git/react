import React, { useState, useEffect } from "react";

const products = ["Телефон", "Ноутбук", "Құлаққап", "Планшет", "Сағат"];

const App = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentlyViewed(savedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const handleProductClick = (product) => {
    setRecentlyViewed((prev) => {
      const updatedList = [product, ...prev.filter((item) => item !== product)];
      return updatedList.slice(0, 5);
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Өнімдер</h2>
      {products.map((product) => (
        <button key={product} onClick={() => handleProductClick(product)} style={{ margin: "5px" }}>
          {product}
        </button>
      ))}

      <h2>Соңғы қаралғандар</h2>
      <ul>
        {recentlyViewed.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;