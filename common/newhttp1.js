var http =require('http');
var url =require('url');
var a =require('foo1');
var c =require('foo/foo');

http.createServer(function(req,res){
res.writeHead(200,{"content-Type":"text/jtml;charset='utf-8'"});
res.write('hello,nodejs123');
console.log(a);//在node_modules里面时可以直接引入。即如果引入在外面找不到时会在node-modules里面进行查找
console.log(c);
res.end();
}).listen(8001);