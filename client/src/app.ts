import { BrowserApplication } from "@typescene/webapp";
import MainActivity from "./activities/main/activity";
import AddMovieActivity from "./activities/addMovie/activity";

import RemoteService from './services/Remote';
import MovieService from './services/Movie';

// ... register services here
// new MyService().register();

new RemoteService().register();
new MovieService().register();

const app = BrowserApplication.run(
  MainActivity,
  AddMovieActivity,
  // ... add activities here
);

// uncomment to use the browser history API:
// app.useHistoryAPI();
