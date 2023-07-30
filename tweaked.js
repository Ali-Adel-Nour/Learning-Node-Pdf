const http = require('http')

const fs = require('fs')

http.createServer((req,res)=>{
  let name = require('url').parse(req.url,true).query.name ;

  if(name === undefined ) name = 'world'

  if(name == "Devil"){
    const file = '1.jpg.jpg'

    fs.stat(file,(err,stat)=>{

      if(err){
        console.error(err)

        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end("Sorry, Burningbird isn't around right now \n");
      } else {
      const img = fs.readFileSync(file);
      res.contentType = 'image/png';
      res.contentLength = stat.size;
      res.end(img, 'binary');
      }
      });
      } else {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello ' + name + '\n');
      }
     }).listen(3000);
     console.log('Server running at port 3000/');