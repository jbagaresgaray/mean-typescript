"use strict";

import { setupResponseCallback } from "./../../utils/callback";
import {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser
} from "../../controllers/users";

const _createUser = (req: any, res: any) => {
  createUser(req.body, setupResponseCallback(res));
};

const _getAllUsers = (_req: any, res: any) => {
  getAllUsers(setupResponseCallback(res));
};

const _getUser = (req: any, res: any) => {
  getUser(req.params.user_id, setupResponseCallback(res));
};

const _deleteUser = (req: any, res: any) => {
  deleteUser(req.params.user_id, setupResponseCallback(res));
};

const _updateUser = (req: any, res: any) => {
  updateUser(req.params.user_id, req.body, setupResponseCallback(res));
};

export { _createUser, _getAllUsers, _getUser, _deleteUser, _updateUser };
