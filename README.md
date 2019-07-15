# softgrandLogger
Logger Interface for use in Node JS projects

<<<<<<< HEAD
<img src="http://uupload.ir/files/bkv5_softgrand.png"></img>

=======
>>>>>>> c8c4131f0c49f56185357cc04125fc9b1ef9ece7
## Lager Features:
Logging in the Mongo database

Storing logs in json file system

Display error messages in red and specify the error line number

Show alerts in red

Can be configured to save logs or not

**config using logger**
```
<<<<<<< HEAD
let softgrandLogger = require('../index');
let Logger = new softgrandLogger({});

test = new Logger({
  model: {
    info: {
      type: JSON
    },
    message: {
      type: JSON
    },
    type: {
      type: String
    },
    time: {
      type: JSON
    },
    function: {
      type: JSON
    },
    stack: {
      type: JSON
    },
    additionalInfo: {
      type: JSON
    }
    
  },
=======
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
>>>>>>> c8c4131f0c49f56185357cc04125fc9b1ef9ece7
  levelConfig: {
    warning: {
      save: true,
      color: 'yellowBg',
      show: true,
<<<<<<< HEAD
      viewPath: true
=======
      viewPath:true
>>>>>>> c8c4131f0c49f56185357cc04125fc9b1ef9ece7
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
<<<<<<< HEAD
      enabled: false
     // partMongoInterfaceConfig: mongoInterfaceConfig
    }
  }

});



=======
      enabled: true,
      partMongoInterfaceConfig:mongoInterfaceConfig
    }
  },
  
});

>>>>>>> c8c4131f0c49f56185357cc04125fc9b1ef9ece7
```

***using logger for project***
```
<<<<<<< HEAD

var e = {
  info: {
    sourceType: 'code',
    sourceName: '1'
  },
  message: {
    en: 'text message',
    fa: 'متن فارسی'
  }
};


//test.error(e,'reza');
//test.info(e,"yes of cource");
//test.info(e);
test.warning(e, {
=======
test.error(error,message); 

test.info(info);

test.warning(warning, {
>>>>>>> c8c4131f0c49f56185357cc04125fc9b1ef9ece7
  test: 456,
  test2: {
    test: 456,
    test3: {
      test: 456
    }
  }
});
<<<<<<< HEAD
=======
```
>>>>>>> c8c4131f0c49f56185357cc04125fc9b1ef9ece7
