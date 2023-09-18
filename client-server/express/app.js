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
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    Blog.find().sort({createdAt: -1}).then((result)=>{
        res.render('index',{title:'Blogs',blogs:result})
    })
    res.status(200).send({
        statusCode:200
    })
    
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        message:'We are a well experieenced company dedicated to serving the public in Technological connected fields through, React, React-native ,java etc'
})
})

app.post('/blogs',(req,res)=>{
    const blog = new Blog(req.body)

    blog.save().then((result)=>{
        res.redirect('/')
    }).catch((err)=>{console.log(err)})
})

app.get('/blogs/:id',(req,res)=>{
    const id = req.params.id
    Blog.findById(id).then((result)=>{
        res.render('details',{title:'Blog details',blog:result})
    }).catch(err => {
        console.log(err)
    })
})

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/' });
      })
      .catch(err => {
        console.log(err);
      });
  });

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create New Blog'})
})

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
})