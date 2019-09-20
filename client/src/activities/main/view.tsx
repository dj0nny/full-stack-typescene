import { HMR } from "@typescene/webapp";
import JSX from "typescene/JSX";

export default HMR.enableViewReload(
  module,
  <cell>
    <centerrow>
      <label>Hello, world!</label>
    </centerrow>
  </cell>
);
