const router = (req,res)=>{
    file = './views/'
    switch(req.url){
        case '/':
            file += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            file += 'about.html'
            res.statusCode = 200
            break;
        case '/about-me':
            res.statusCode = 301
            res.setHeader('Location','/about')
            break;
        default:
            file += '404.html'
            res.statusCode = 404
            break;
    }
    return file
}

module.exports = router