"use strict";

process.env.TZ = "UTC";
const env = process.env.NODE_ENV || "development";

import envs from "./config/env";
import * as dotenv from "dotenv";

// ENVIRONMENTS
envs();
process.env.NODE_ENV = env;
dotenv.config();
// LIBRARIES
import * as bunyan from "bunyan";
import * as express from "express";
import * as http from "http";
import * as middleware from "./app/utils/middleware";
import * as config from "./config/environment";
// CONFIGS
import { helper } from "./app/utils/helper";
import { expressConfig } from "./config/express";
// ROUTES
import { mainRoute } from "./app/routes/index";
import { documentRoute } from "./app/routes/documents";

const app = express();
const server = http.createServer(app);
const log = bunyan.createLogger({
  name: "app_name_here"
});

// CONFIGS
helper(server, config, log);
expressConfig(app, config);
// ROUTES
mainRoute(app, config, middleware);
documentRoute(app, middleware);

export default app;
