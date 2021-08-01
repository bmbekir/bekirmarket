import React, { useState } from "react";
import "./sass/App.scss";
import "./sass/fonts.css";
import { Cart } from "./features/cart/cart";
import RadioList from "./plugins/radioList";
import CheckboxList from "./plugins/checkboxList";
import TypeSelector from "./plugins/typeSelector";
import Navbar from "./layout/navbar/navbar";

function App() {
  const [radioTest, setRadioTest] = useState(0);
  const [typeTest, setTypeTest] = useState("mug");
  const [checkTest, setCheckTest] = useState([] as any[]);
  return (
    <div className="App">
      <header className="App-header">
        {/*
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
          <div style={{ width: "129px" }}>
            <TypeSelector
              onChange={(value) => setTypeTest(value)}
              selectdeValue={typeTest}
              items={[
                { label: "mug", value: "mug" },
                { label: "shirt", value: "shirt" },
              ]}
            />
          </div>
        </div> */}
        <Navbar />
      </header>
    </div>
  );
}

export default App;
