const http = require('http')
const fs = require('fs')
const router = require('./basic_routing')

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method)

    res.setHeader('Content-type','text/html')
    file = router(req,res)
    if(fs.existsSync(file)){
        fs.readFile(file,(err,data)=>{
            if(err){
                res.write('An Error Occured')
                res.end()
            }else{
                res.end(data)
            }
        })
    }
    
})

server.listen(3000,'localhost',()=>{
    console.log('Server is running on port 3000')
})