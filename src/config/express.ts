/*jshint camelcase: false */

"use strict";

import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as compression from "compression";
import * as express from "express";
import * as helmet from "helmet";
import * as morgan from "morgan";
import * as methodOverride from "method-override";
import * as path from "path";

import * as middleware from "../app/utils/middleware";
import * as expressValidator from "express-validator";

export const expressConfig = (app: any, config: any) => {
  console.log("__dirname: ", path.join(__dirname, "../docs"));
  app.set("port", config.port || process.env.PORT || 3000);
  app.set("ip", config.ip);
  app.set("env", config.env);
  app.set("config", config);
  app.set("api_version", process.env.APP_VER || config.api_version);
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../app/views"));

  app.use("/public", express.static(__dirname + "./../public"));
  app.use("/docs", express.static(path.join(__dirname, "../docs")));
  app.use("/uploads", express.static(__dirname + "./../public/uploads"));
  // Using helmet per best practise: https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
  app.use(helmet());
  // Using gzip compression per best practise: https://expressjs.com/en/advanced/best-practice-performance.html#use-gzip-compression
  app.use(compression());

  app.use(morgan("dev"));
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(expressValidator());
  app.use(
    bodyParser.json({
      limit: "50mb",
      type: "application/json"
    })
  );
  app.use(
    bodyParser.urlencoded({
      extended: true,
      limit: "50mb"
    })
  );
  app.use(middleware.allowCrossDomain);
  app.enable("trust proxy");
};
