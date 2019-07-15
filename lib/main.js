let colorCodes = {
  normal: '',
  reset: '\033[0m',
  black: '\033[30m',
  red: '\033[31m',
  green: '\033[32m',
  yellow: '\033[33m',
  blue: '\033[34m',
  magenta: '\033[35m',
  cyan: '\033[36m',
  white: '\033[37m',
  blackBg: '\033[40m',
  redBg: '\033[41m',
  greenBg: '\033[42m\033[30m',
  yellowBg: '\033[43m\033[30m',
  blueBg: '\033[44m\033[37m',
  magentaBg: '\033[45m',
  cyanBg: '\033[46m\033[30m',
  whiteBg: '\033[47m\033[30m'
};

let callerId = require('caller-id');
let u = require('./softgrandUtil');
let fs = require("fs");
<<<<<<< HEAD
let mongoos = require('mongoose');
mongoos.Promise = global.Promise;
mongoos.connect('mongodb://localhost:27017/loggger');
let util = require('util');




=======
let SoftgrandMongoInterface = require('../modulee/softgrandMongoInterface/index');
let util = require('util');

>>>>>>> c8c4131f0c49f56185357cc04125fc9b1ef9ece7
class softgrandLogger {
  constructor(global) {
    return class logger {
      constructor(instance) {
        let self = this;
        self.global = global;
        self.instance = instance;
        self.fs = fs;
<<<<<<< HEAD
        let MONGO = mongoos.model('log', instance.model);
        self.mongo = MONGO;
      }

=======
        let MONGO = new SoftgrandMongoInterface(instance.storageDB.mongoDB.partMongoInterfaceConfig.global);
        self.mongo = new MONGO(instance.storageDB.mongoDB.partMongoInterfaceConfig.instance);
      }


>>>>>>> c8c4131f0c49f56185357cc04125fc9b1ef9ece7
      error(standardEventObj, additionalInfo) {
        let self = this;
        if (self.instance.levelConfig.error.view || self.instance.levelConfig.error.save) {
          standardEventObj = u.cloneObject(standardEventObj);
          var err = new Error(),
            stack = err.stack.split('\n    at');
          stack.splice(0, 2);
          standardEventObj.type = 'error';
          standardEventObj.time = u.humanReadableTime();
          standardEventObj.function = callerId.getData(self.error).functionName;
          standardEventObj.stack = stack;
          additionalInfo && (standardEventObj.additionalInfo = additionalInfo);
          if (self.instance.levelConfig.error.show) {
            self.viewError(standardEventObj, 'Error', 'error')
          }

          if (self.instance.levelConfig.error.save && self.instance.storageDB.mongoDB.enabled) {
            // saveMongo(standardEventObj, collection, self);
<<<<<<< HEAD
            saveMongo(standardEventObj, '', self);
=======
            saveMongo(standardEventObj,'',self);
>>>>>>> c8c4131f0c49f56185357cc04125fc9b1ef9ece7
          }

          if (self.instance.levelConfig.error.save && self.instance.storageDB.fileSystem.enabled) {
            saveFileSystem(standardEventObj, self);
          }

        }
      };

      info(input) {
        let self = this;
        let log = {};
        log.message = input;
        log.time = u.humanReadableTime().time;
        log.date = u.humanReadableTime().date;
        log.timeStamp = new Date().getTime();
        if (self.instance.levelConfig.info.show) {
          console.log(colorCodes.magentaBg, log);
        }
        if (self.instance.levelConfig.info.save && self.instance.storageDB.mongoDB.enabled) {
          // saveMongo(standardEventObj, collection, self);
<<<<<<< HEAD
          saveMongo(log, self);
=======
          saveMongo(log,self);
>>>>>>> c8c4131f0c49f56185357cc04125fc9b1ef9ece7
        }
      };

      warning(standardEventObj, additionalInfo) {
        var self = this;
        if (self.instance.levelConfig.warning.view || self.instance.levelConfig.warning.save) {
          standardEventObj = u.cloneObject(standardEventObj);
          var err = new Error(),
            stack = err.stack.split('\n    at');
          stack.splice(0, 2);
          standardEventObj.type = 'warning';
          standardEventObj.time = u.humanReadableTime();
          standardEventObj.function = callerId.getData(self.warning).functionName;
          standardEventObj.stack = stack;
          additionalInfo && (standardEventObj.additionalInfo = additionalInfo);
        }

        if (self.instance.levelConfig.warning.show) {
          self.viewError(standardEventObj, 'Warning', 'warning')
        }
        if (self.instance.levelConfig.warning.save && self.instance.storageDB.mongoDB.enabled) {
          saveMongo(standardEventObj, self);
        }
        if (self.instance.levelConfig.warning.save && self.instance.storageDB.fileSystem.enabled) {
          saveFileSystem(standardEventObj, self);
        }
      };


      viewError(standardEventObj, prefix, level) {
        var self = this,
          output,
          prefix = prefix;
        output = console.error;
        output(
          colorCodes[self.instance.levelConfig[level].color] +
          prefix + ' ' + u.humanReadableTime().date + ' ' + u.humanReadableTime().time +
          ' ' +
          u.pad(standardEventObj.info.sourceType, self.instance.sourceTypeWidth) +
          ' ' +
          u.pad(standardEventObj.info.sourceName, self.instance.sourceNameWidth) +
          ' ' +
          colorCodes.reset +
          (standardEventObj.message.en || standardEventObj.message)
        );
        self.errorViewPath(standardEventObj, level)
        if (standardEventObj.hasOwnProperty('additionalInfo') &&
          (self.instance.levelConfig['error'].view.additionalView == true)) {
          //console.log('99999');
          output(
            '└─>  additionalInfo: ',
            util.inspect(standardEventObj.additionalInfo, false, null),
            '\n'
          );
        }
      };

      errorViewPath(standardEventObj, level) {
        let self = this;
        if (self.instance.levelConfig[level].viewPath) {
          console.error(
            '└─>',
            standardEventObj.stack[0]
          );
        } else {
          return function () {};
        }
      };
    }
  }
}



function saveMongo(data, self) {
  let log = new self.mongo(data);
  log.save().then((res) => {
    console.log('res:', res);
  }, (err) => {
    console.log("err:", err);
  });
}

function saveFileSystem(data, self) {
  self.fs.appendFile('../syslog/message.json', JSON.stringify(data),
    function (err) {
      if (err) throw err;
      console.log('Saved file system!');
    });
}



module.exports = softgrandLogger;