var moment = require('moment');

var data = {
    "zzh1": { "an": "zzh1", "pd": "2011.11.12" },
    "zzh2": { "an": "zzh1", "pd": "2013.11.12" },
    "zzh3": { "an": "zzh1", "pd": "2012.11.12" },
    "zzh4": { "an": "zzh1", "pd": "2014.11.12" },
    "zzhan2": { "an": "zzh", "pd": "2001.11.22" },
    "zzhan3": { "an": "zzh", "pd": "2005.01.12" },
    "zzhan4": { "an": "zzh", "pd": "2006.01.12" },
    "zzhan5": { "an": "zzh", "pd": "2007.01.12" },
};

var dataArray = [];

for (var key in data) {
    if (data.hasOwnProperty(key)) {
        dataArray.push({
            key: key,
            val: data[key]
        })
    }
}

dataArray.sort(function (a, b) {
    var time1 = moment(a.val.pd, "YYYY.MM.DD").valueOf();
    var time2 = moment(b.val.pd, "YYYY.MM.DD").valueOf();
    if (time1 - time2 > 0) {
        return -1;
    } else if (time1 - time2 === 0) {
        return 0;
    } else if (time1 - time2 < 0) {
        return 1;
    }
});

var distincted = dataArray.filter(function (el, index) {
    var first = dataArray.find(function (el2, index) {
        return el2.val.an === el.val.an;
    });
    return el === first;
});

var result = {};

distincted.forEach(function (el, index) {
    result[el.key] = el.val;
});

console.log(result);