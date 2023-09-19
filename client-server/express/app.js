const express = require('express')
const morgan = require('morgan')
const app = express()
const conn = require('./database')
const blogRoutes = require('./router')

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
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

app.use('/blogs',blogRoutes)

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
})