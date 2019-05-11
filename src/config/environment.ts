/*jshint camelcase: false */

"use strict";

export const environment: any = {
  env: process.env.NODE_ENV,
  port: process.env.APP_PORT, // PLEASE DONT REMOVE 'process.env.PORT'
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  db_port: process.env.DB_PORT,
  app_name: "AppNameHere",
  api_version: process.env.API_VERSION,
  app_version: process.env.APP_VERSION,
  app_host_url: process.env.APP_HOST_URL,
  api_host_url: process.env.API_HOST_URL,
  token_secret: process.env.TOKEN_SECRET,
  sendgrid_key: process.env.SENDGRID_KEY,
  sendgrid_api_key: process.env.SENDGRID_API_KEY,
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
  GOOGLE_SECRET: process.env.GOOGLE_SECRET,
  LINKEDIN_SECRET: process.env.LINKEDIN_SECRET,
  TWITTER_KEY: process.env.TWITTER_KEY,
  TWITTER_SECRET: process.env.TWITTER_SECRET
};
