"use strict";

import * as _knex from "knex";
import * as db from "../../config/database";

const knex = _knex({
  client: "mysql",
  connection: db.dbConfig
});

const _checkUserUsername = (data: any, next: any) => {
  knex("users")
    .where("username", "LIKE", "?", ["%" + data.username + "%"])
    .first()
    .asCallback(next);
};

const _createUser = (data: any, next: any) => {
  knex
    .transaction(trx => {
      return knex
        .insert(
          {
            firstname: data.firstname,
            lastname: data.lastname,
            username: data.username,
            password: data.password
          },
          "id"
        )
        .into("users")
        .transacting(trx)
        .then((resp: any[]) => {
          const id = resp[0];
          return next(null, id);
        })
        .then(trx.commit)
        .catch(trx.rollback);
    })
    .asCallback(next);
};

const _getAllUsers = (next: any) => {
  knex
    .select()
    .table("users")
    .asCallback(next);
};

const _getUser = (user_id: any, next: any) => {
  knex
    .select()
    .table("users")
    .where("user_id", user_id)
    .first()
    .asCallback(next);
};

const _deleteUser = (user_id: any, next: any) => {
  knex
    .transaction(trx => {
      return knex("users")
        .where("user_id", user_id)
        .delete()
        .transacting(trx)
        .then(trx.commit)
        .catch(trx.rollback);
    })
    .asCallback(next);
};

const _updateUser = (user_id: any, data: any, next: any) => {
  knex
    .transaction(trx => {
      return knex("users")
        .where("user_id", user_id)
        .update({
          firstname: data.firstname,
          lastname: data.lastname,
          username: data.username,
          password: data.password
        })
        .transacting(trx)
        .then(trx.commit)
        .catch(trx.rollback);
    })
    .asCallback(next);
};

export {
  _checkUserUsername,
  _createUser,
  _getAllUsers,
  _getUser,
  _deleteUser,
  _updateUser
};
