import React, { useState } from "react";
import "./index.css";
import andrewNgImage from "./andrew_ng.jpg"; // Image of Andrew Ng

const App = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Default and hover background styles
  const bgStyle = isHovered
    ? "linear-gradient(135deg, #FFD700, #FFA07A)" // On hover
    : "linear-gradient(135deg, #00BFFF, #6A5ACD)"; // Default

  return (
    <div className="app-container">
      <div
        className="profile-card"
        style={{
          background: bgStyle,
          color: isHovered ? "#000" : "#fff",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={andrewNgImage} alt="Andrew Ng" className="profile-pic" />
        <h2>Andrew Ng</h2>
        <p>AI leader, co-founder of Coursera, and Stanford professor.</p>
      </div>
    </div>
  );
};

export default App;
