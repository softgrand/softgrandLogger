# softgrandLogger
Logger Interface for use in Node JS projects

## Lager Features:
Logging in the Mongo database

Storing logs in json file system

Display error messages in red and specify the error line number

Show alerts in red

Can be configured to save logs or not

**config using logger
```
let SoftgrandLogger = require('../index');
let Logger = new SoftgrandLogger({});
let mongoInterfaceConfig = {
  global: {},
  instance: {
    host: '127.0.0.1',
    port: 27017,
    dbName: 'test',
    dbUser: '',
    dbPass: '',
    strictMode: false
  }
}
test = new Logger({
  levelConfig: {
    warning: {
      save: true,
      color: 'yellowBg',
      show: true,
      viewPath:true
    },
    error: {
      save: false,
      color: 'redBg',
      show: true,
      view: {
        main: true,
        additionalView: false
      },
      viewPath: true
    },
    info: {
      save: true,
      show: true,
      viewPath: true
    }
  },
  storageDB: {
    fileSystem: {
      enabled: false

    },
    mongoDB: {
      enabled: true,
      partMongoInterfaceConfig:mongoInterfaceConfig
    }
  },
  
});
```
