import React from "react";
import "./sass/App.scss";
import "./sass/fonts.css";
import { Cart } from "./features/cart/cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "296px" }}>
          <Cart />
        </div>
      </header>
    </div>
  );
}

export default App;
