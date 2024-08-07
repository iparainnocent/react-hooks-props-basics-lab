import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Links from "./components/Links";
import NavBar from "./components/NavBar";

import {
  username,
  city,
  image,
  bio,
  github,
  linkedin,
  color,
} from "./data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home username={username} city={city} image={image} color={color} />
      <About bio={bio} />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;
