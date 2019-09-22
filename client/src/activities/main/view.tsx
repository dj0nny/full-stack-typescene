import { HMR } from "@typescene/webapp";
import JSX from "typescene/JSX";
import { bind } from 'typescene';

export default HMR.enableViewReload(
  module,
  <scrollcontainer>
    <flowcell dimensions={{ width: "100%", maxWidth: "100vw" }} position={{ gravity: "center" }} padding={{ top: 32, x: 16 }}>
      <row>
        <h1>full-stack-typescene</h1>
      </row>
      <spacer dimensions={{ height: 32 }} />
      <list items={bind("movieService.movieList")} >
        <listcell padding={{ x: 16, y: 8 }}>
          <row>
						<h2 text={bind("object.movie.title")}></h2>
          </row>
          <row>
            <h3 text={bind("object.movie.director")}></h3>
          </row>
          <row>
            <label text={bind("object.movie.releaseYear")}></label>
          </row>
          <img url={bind("object.movie.playbillUrl")} dimensions={{ width: "40%" }}></img>
          <spacer dimensions={{ height: 64 }} />
        </listcell>
      </list>
    </flowcell>
  </scrollcontainer>
);
