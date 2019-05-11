"use strict";

import * as config from "./environment";

export const dbConfig: any = {
  host: config.environment.host,
  user: config.environment.user,
  password: config.environment.password,
  database: config.environment.database,
  port: config.environment.db_port,
  connectTimeout: 20000,
  dateStrings: true,
  multipleStatements: true
};
