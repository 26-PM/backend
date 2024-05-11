const http=require("http");
const hostname="127.0.0.1";
const port=3000
// https://friendly-carnival-r96jqpvvg4x3pj94-3000.app.github.dev/

const server=http.createServer((req,res)=>{
    
        res.statusCode=200
        res.setHeader("Content-Type","text/plain")
        res.end="Hello World."
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})