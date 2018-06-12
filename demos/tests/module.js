function localFunc() {
    const self = exports;
    console.log(self.myVar);
}

exports.myVar = 'foo';

exports.myFunc = function () {
    console.log(exports);
    localFunc();
}