import * as React from "react";
import Test from "../components/basic/test";
import RussButton from "../components/basic/russ-button";

const RussTest = () => (
  <main>
    <h1>Russ Test</h1>
    <p>This page is a simple test!</p>
    <Test input="RUSSELL" />
    <div style={{ marginTop: "20px" }}>
      <RussButton text="Russ Button" />
    </div>
  </main>
);

export default RussTest;
