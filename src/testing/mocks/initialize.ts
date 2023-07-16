/* eslint-disable @typescript-eslint/no-var-requires */

import { IS_SERVER } from "@/config/constants";

const initializeMocks = () => {
  if (IS_SERVER) {
    const { server } = require("./server");
    server.listen({
      onUnhandledRequest: "bypass",
    });
  } else {
    const { worker } = require("./browser");
    worker.start({
      onUnhandledRequest: "bypass",
    });
  }
};

initializeMocks();
