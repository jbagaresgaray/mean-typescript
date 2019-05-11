"use strict";

export const setupResponseCallback = (res: any) => {
  return (error: any, returnValue: any) => {
    if (error) {
      return res.status(500).json({ response: error, statusCode: 500 });
    }
    return res.status(200).json({ response: returnValue, statusCode: 200 });
  };
};
