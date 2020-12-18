var http =require('http');

var url =require('url');

// http.createServer(function(req,res){
// res.writeHead(200,{"content-Type":"text/jtml;charset='utf-8'"});
// res.write('hello,nodejs');

// res.end();
// }).listen(8001);
var a="http://www.baidu.com?name='xiaom'&age='12'";
console.log(url);
console.log(url.parse(a));
console.log(url.parse(a,true));
console.log(url.format(a));