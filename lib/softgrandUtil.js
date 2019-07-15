function humanReadableTime() {
  var date = new Date(),
    sec = (date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()),
    min = (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()),
    hour = (date.getHours() > 9 ? date.getHours() : '0' + date.getHours()),
    day = (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()),
    month = (date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1));
  //return (date.getFullYear() + '.' + month + '.' + day + ' ' + hour + ':' + min + ':' + sec);
  return {
    date: date.getFullYear() + '.' + month + '.' + day,
    time: hour + ':' + min + ':' + sec
  }
}

function cloneObject(input) {
  var result = {};
  for (var key in input) {
    if (input.hasOwnProperty(key)) {
      result[key] = input[key];
    }
  }
  return result;
}
function pad(string, len) {
  return (string + "                    ").substr(0, len);
}

exports.humanReadableTime = humanReadableTime;
exports.cloneObject = cloneObject;
exports.pad = pad;