'use strict';

const allowCrossDomain = (req:any, res:any, next:any)=> {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Authorization, X-Requested-With, Content-Type, Accept, Cache-Control,AccessKey,AccessCode,Auth_Token,timezone,timezone2');
    // next();
    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        return res.end();
    } else {
        return next();
    }
};

export {
  allowCrossDomain
}