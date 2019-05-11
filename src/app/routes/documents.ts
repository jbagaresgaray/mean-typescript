"use strict";

import * as fs from "fs-extra";
import * as path from "path";

export const documentRoute = (app: any, _middleware: any) => {
  app.route("/docx").get((_req: any, res: any) => {
    const file = "../../docs/api/index.html";
    const filePath = path.join(__dirname,file);
    console.log("__dirname: ", filePath);
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log("Error: " + err);
        return;
      }
      res.send(data);
    });
  });

  app.route("/docx-v1").get((_req: any, res: any) => {
    const file = "../../docs/api/swagger.json";
    const filePath = path.join(__dirname,file);
    console.log("file: ", filePath);
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log("Error: " + err);
        return;
      }
      data = JSON.parse(data);
      res.send(data);
    });
  });
};
