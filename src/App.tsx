import React, { useState } from "react";
import "./sass/App.scss";
import "./sass/fonts.css";
import { Cart } from "./features/cart/cart";
import RadioList from "./plugins/radioList";
import CheckboxList from "./plugins/checkboxList";

function App() {
  const [radioTest, setRadioTest] = useState(0);
  const [checkTest, setCheckTest] = useState([] as any[]);
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
        <div>
          <CheckboxList
            checkedValues={checkTest}
            onChange={(values, index) => setCheckTest(values)}
            items={[
              { label: "item 1", value: "1" },
              { label: "item 2", value: "2" },
              { label: "item 3", value: "3", extra: "asd" },
            ]}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
