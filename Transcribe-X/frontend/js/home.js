import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to TranscribeX Home</h1>
      <ul>
        <li onClick={() => navigate("/feature1")}>Feature 1</li>
        <li onClick={() => navigate("/feature2")}>Feature 2</li>
        <li onClick={() => navigate("/feature3")}>Feature 3</li>
        <li onClick={() => navigate("/feature4")}>Feature 4</li>
      </ul>
    </div>
  );
}

export default Home;
