/*jshint camelcase: false */

"use strict";

// ======================== VALIDATION ============================ //
import { validateUser } from "../validation/users";

// ======================== ROUTING ============================ //
import {
  _getAllUsers,
  _createUser,
  _getUser,
  _deleteUser,
  _updateUser
} from "./routing/users";

export const mainRoute = (app: any, config: any, _middleware: any) => {
  console.log("ROUTES");

  app.route("/").get((_req: any, res: any) => {
    res.render("index");
  });

  app
    .route(config.api_version + "/users")
    .get(_getAllUsers)
    .post(validateUser, _createUser);

  app
    .route(config.api_version + "/users/:user_id")
    .get(_getUser)
    .delete(_deleteUser)
    .put(validateUser, _updateUser);
};
