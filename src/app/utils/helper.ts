"use strict";

const helper = (server: any, config: any, _log: any) => {
  const _config = config.environment;
  server.listen(process.env.APP_PORT || _config.port, (errs: any) => {
    if (errs instanceof Error) {
      console.log(
        "ENVIRONMENT: " , _config.env , " Unable to start Server",
        _config.port
      );
    } else {
      console.log(
        "ENVIRONMENT: " ,
          _config.env ,
          " Server started at PORT: " ,
          _config.port ,
          " Using API VERSION: " ,
          _config.api_version
      );
    }
  });
};

export { helper };
