var webpage = require('webpage');
var page = webpage.create();
var fs = require('fs');
phantom.outputEncoding = 'utf-8';

page.open('http://daily.zhihu.com/',function (status) {
    if (status === 'success'){
        console.log('加载成功');
        page.includeJs('https://code.jquery.com/jquery-3.2.1.min.js');
        setTimeout(function () {
            var content = page.evaluate(function () {
                var arr = [];
                $('body .main-content .title').each(function (index, element){
                    arr.push($(element).text());
                });
                return arr;
            });
            console.log(content);
            fs.write('./images.json',content,'w');
            phantom.exit(0)
        },10000)
    }else {
        console.log('加载失败');
        phantom.exit(0)
    }
});