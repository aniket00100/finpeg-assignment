var dataJson = require('../data/funds.json');

export function printData() {
    console.log(dataJson);
}

export function getAllFunds() {
    return dataJson['result']['funds'];
}

export function getFundsByName(name) {
    var returnResult = [];
    for (var i = 0; i < dataJson['result']['funds'].length; i++) {
        if (dataJson['result']['funds'][i].name.toLowerCase().includes(name.toLowerCase())) {
            returnResult.push(dataJson['result']['funds'][i])
        }
    }
    if (returnResult.length == 0) {
        var splitedName = name.split(" ");
        for(var i=0;i< splitedName.length;i++){
            for (var j = 0; j < dataJson['result']['funds'].length; j++) {
                if (dataJson['result']['funds'][j].name.toLowerCase().includes(splitedName[i].toLowerCase())) {
                    returnResult.push(dataJson['result']['funds'][i])
                }
            }
        }
    return [...new Set(returnResult)];
    }
    return returnResult;
}