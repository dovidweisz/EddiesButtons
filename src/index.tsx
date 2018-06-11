import * as React from "react";
import { render } from "react-dom";
import { ButtonPlayground } from "./ButtonPlayground";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <ButtonPlayground />
  </div>
);

render(<App />, document.getElementById("root"));
