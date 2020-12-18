var http =require('http');
var url =require('url');
var tool =require('./tool');
http.createServer(function(req,res){
res.writeHead(200,{"content-Type":"text/jtml;charset='utf-8'"});
res.write('hello,nodejs123');
// res.write(tool);

console.log(tool);
var a=req.url;
// console.log(url.parse(a));
// console.log(url.parse(a,true));
// console.log(url.format(a));
// if(req.url!='/favicon.ico'){
// console.log(url.parse(a,true));

// }
res.end();
}).listen(8001);