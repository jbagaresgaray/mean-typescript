"use strict";

export default () => {
  process.argv.forEach((v, index) => {
    if (index > 1) {
      process.env.NODE_ENV = v;
    }
  });
};
