import { HMR } from '@typescene/webapp';
import JSX from 'typescene/JSX';

export default HMR.enableViewReload(
  module,
  <scrollcontainer>
    <h1 text="hello"></h1>
  </scrollcontainer>
);