const express = require('express')
const morgan = require('morgan')
const app = express()
const conn = require('./database')
const Blog = require('./models/blog')

//Database Connection
conn.then((result)=>{
    console.log('Database Connection')
    app.listen(3000,()=>{
        console.log('Server has fired up')
    })
}).catch((err) => {console.log(`An error occured ${err}`)})

app.set('view engine','ejs')

//middleware
app.use(express.static('public'))

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    Blog.find().sort({createdAt: -1}).then((result)=>{
        res.render('index',{
            title:'Home',
            blogs:result,
        })
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