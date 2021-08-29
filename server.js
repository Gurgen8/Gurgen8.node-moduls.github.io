const http = require('http');
const fs =require("fs")

const server = http.createServer((req, res) => {
  // res.writeHead(200, {"Content-type":"text/plain"});
    if(req.url==="/"){
    
      res.end("plase enter fileame & context in file")

    }else{ 
   const fullPath = new URL(req.headers.host + req.url);
   const file = fullPath.searchParams.get('file')
   const context = fullPath.searchParams.get('context')
    fs.appendFile(`${file}`, `${context}`, function(eror) {if (eror) throw err;
    console.log('Sucssesed!');}  );
   console.log(file, context)
   res.end(file + " --- " + context)
    }
});


server.listen('8888', 'localhost', () => {
  console.log('server successfully started ...!!!')
})


