import React from "react";
import splash from "./splash.jpg";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${splash})` }}>
      <div className="title">COMING SOON</div>
    </div>
  );
}

export default App;
