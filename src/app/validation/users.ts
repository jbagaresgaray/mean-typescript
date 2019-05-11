"use strict";

const validateUser = (req: any, res: any, next: any) => {
  req.checkBody("lastname", "Please provide your lastname").notEmpty();
  req.checkBody("firstname", "Please provide your firstname").notEmpty();
  req.checkBody("username", "Please provide your username").notEmpty();
  req.checkBody("password", "Please provide your password").notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).send({
      response: {
        result: errors,
        msg: "",
        success: false
      },
      statusCode: 400
    });
  } else {
    return next();
  }
};


export {
  validateUser
}