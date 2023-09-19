const express = require('express')
const blogController = require('./controller/blogController')


const router = express.Router()

router.get('/',blogController.blog_home)

router.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        message:'We are a well experieenced company dedicated to serving the public in Technological connected fields through, React, React-native ,java etc'
})
})

router.post('/',blogController.blog_create_post)

router.get('/create',blogController.blog_create_get)

router.get('/:id',blogController.blog_details)

router.delete('/:id',blogController.blog_delete)

module.exports = router

