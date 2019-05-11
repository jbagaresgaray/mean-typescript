"use strict";

import {
  _checkUserUsername,
  _createUser,
  _getAllUsers,
  _getUser,
  _deleteUser,
  _updateUser
} from "../services/users";
import * as async from "async";

export const createUser = (data: any, next: any) => {
  async.waterfall(
    [
      (callback: any) => {
        _checkUserUsername(data, (err: any, response: any) => {
          if (err) {
            return next(
              {
                msg: err.msg,
                result: err,
                success: false
              },
              null
            );
          }

          if (response) {
            return next(null, {
              msg: "Username already existed",
              result: null,
              success: false
            });
          }
          return callback();
        });
      },
      (callback: any) => {
        _createUser(data, (err:any, response:any) => {
          if (err) {
            return next(
              {
                msg: err.msg,
                result: err,
                success: false
              },
              null
            );
          }
          return callback(null, {
            msg: "Record successfully saved!",
            result: response,
            success: true
          });
        });
      }
    ],
    next
  );
};

export const getAllUsers = (next: any) => {
  _getAllUsers((err: any, response: any) => {
    if (err) {
      return next(
        {
          msg: err.msg,
          result: err,
          success: false
        },
        null
      );
    }

    return next(null, {
      msg: "",
      result: response,
      success: true
    });
  });
};

export const getUser = (user_id: any, next: any) => {
  getUser(user_id, (err: any, response: any) => {
    if (err) {
      return next(
        {
          msg: err.msg,
          result: err,
          success: false
        },
        null
      );
    }

    return next(null, {
      msg: "",
      result: response,
      success: true
    });
  });
};

export const deleteUser = (user_id: any, next: any) => {
  deleteUser(user_id, (err: any, response: any) => {
    if (err) {
      return next(
        {
          msg: err.msg,
          result: err,
          success: false
        },
        null
      );
    }
    return next(null, {
      msg: "Record successfully deleted!",
      result: response,
      success: true
    });
  });
};

export const updateUser = (user_id: any, data: any, next: any) => {
  updateUser(user_id, data, (err: any, response: any) => {
    if (err) {
      return next(
        {
          msg: err.msg,
          result: err,
          success: false
        },
        null
      );
    }
    return next(null, {
      msg: "Record successfully updated!",
      result: response,
      success: true
    });
  });
};
