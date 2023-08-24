
var Log = (function () {
    function Log() {

    }
    Log.success = function (message) {
        console.log("%c ".concat(message), 'color:green');
        console.log("%c salman", 'color:green');

    }
    Log.danger = function (message) {
        console.log("%c ".concat(message), 'color:red');
    }
    Log.info = function (message) {
        console.log("%c ".concat(message), 'color:black;background:yellow');
    }
    Log.custom = function (message, obj) {
        console.log("%c ".concat(message), `color:${obj?.color};background:${obj?.bgcolor};font-family:${obj?.font};font-weight: ${obj?.weight}; font-size: ${obj?.size};text-shadow: ${obj?.shadow}`);
    }
    return Log;
});

exports.Log = Log;