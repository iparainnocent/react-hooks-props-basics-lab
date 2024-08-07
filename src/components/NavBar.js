import React from "react";

 function NavBar() {
  return (
    <nav>
      <div className="logo">My App</div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Links</a>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;