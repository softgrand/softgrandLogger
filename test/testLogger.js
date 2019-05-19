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
  test: 456,
  test2: {
    test: 456,
    test3: {
      test: 456
    }
  }
});