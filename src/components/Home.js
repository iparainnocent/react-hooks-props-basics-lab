import React from "react";

 function Home({ name, city, image, color }) {
  return (
    <div className="home">
      <img src={image} alt={name} />
      <h1 style={{ color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home;