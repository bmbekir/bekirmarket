import React, { useState } from "react";
import "./sass/App.scss";
import "./sass/fonts.css";
import { Cart } from "./features/cart/cart";
import RadioList from "./plugins/radioList";

function App() {
  const [radioTest, setRadioTest] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "296px" }}>
          <Cart />
        </div>
        <div>
          <RadioList
            checkedValue={radioTest}
            onChange={(value, index) => setRadioTest(value)}
            items={[
              { label: "item 1", value: "1" },
              { label: "item 2", value: "2" },
              { label: "item 3", value: "3" },
            ]}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
