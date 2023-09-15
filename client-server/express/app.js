const express = require('express')
const morgan = require('morgan')
const app = express()

app.set('view engine','ejs')

//middleware
app.use(express.static('public'))

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    const blogs = [
        {title:'Grow the Animal',snippet:'The Animal grows as fat as'},
        {title:'Basketbal Origin',snippet:'James Naismith is what we attribute'},
        {title:'Jesus is Lord',snippet:'Jesus isthe true son of God'},
    ]
    res.render('index',{
        title:'Home',
        blogs:blogs,
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        message:'We are a well experieenced company dedicated to serving the public in Technological connected fields through, React, React-native ,java etc'
})
})

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create New Blog'})
})

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
})

app.listen(3000,()=>{
    console.log('Server has fired up')
})