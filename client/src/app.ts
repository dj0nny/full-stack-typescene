import { BrowserApplication } from "@typescene/webapp";
import MainActivity from "./activities/main/activity";

import RemoteService from './services/Remote';

// ... register services here
// new MyService().register();

new RemoteService().register();

const app = BrowserApplication.run(
  MainActivity,
  // ... add activities here
);

// uncomment to use the browser history API:
// app.useHistoryAPI();
