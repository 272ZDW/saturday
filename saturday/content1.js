var fs = require('fs');
var download = require('./download');
fs.readFile('./images.json','utf-8',function (error,data) {
    var array = (data.split(','));
    array.forEach(function (item,index) {
        console.log(item);
        download(item,'images',index + '.jpg');
    });
});