import React, { useState } from "react";
import "./sass/App.scss";
import "./sass/fonts.css";
import { Cart } from "./features/cart/cart";
import RadioList from "./plugins/radioList";
import CheckboxList from "./plugins/checkboxList";
import TypeSelector from "./plugins/typeSelector";
import Navbar from "./layout/navbar/navbar";
import LeftBox from "./plugins/leftbox";
import Layout, { PageCenter, PageLeft, PageRight } from "./layout/structure";
import Bottom from "./layout/bottom/bottom";

function App() {
  const [radioTest, setRadioTest] = useState(0);
  const [typeTest, setTypeTest] = useState("mug");
  const [checkTest, setCheckTest] = useState([] as any[]);
  return (
    <div className="App">
      <header className="App-header">
        {/*
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
         
        </div> */}
        <Navbar />
      </header>
      <Layout>
        <PageLeft>
          <LeftBox title="Sorting">
            <RadioList
              checkedValue={radioTest}
              onChange={(value, index) => setRadioTest(value)}
              items={[
                { label: "item 1", value: "1" },
                { label: "item 2", value: "2" },
                { label: "item 3", value: "3" },
              ]}
            />
          </LeftBox>
        </PageLeft>
        <PageCenter>
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
        </PageCenter>
        <PageRight>
          <Cart />
        </PageRight>
      </Layout>
      <Bottom />
    </div>
  );
}

export default App;
