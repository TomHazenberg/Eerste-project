import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const files = {'/':'index.html','/index.html':'index.html','/style.css':'style.css','/app.js':'app.js','/products.js':'products.js'};
const types={html:'text/html; charset=utf-8',css:'text/css',js:'text/javascript'};
http.createServer(async(req,res)=>{try{const path=new URL(req.url,'http://localhost').pathname; if(!files[path]){res.writeHead(404);res.end('Niet gevonden');return;} const file=files[path]; res.setHeader('Content-Type',types[file.split('.').pop()]);res.end(await readFile(fileURLToPath(new URL(file,import.meta.url))));}catch{res.writeHead(500);res.end('Er ging iets mis');}}).listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('Schijfwijzer gestart op poort '+(process.env.PORT||3000)));
