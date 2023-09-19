const Blog = require('../models/blog')

const blog_home = (req,res)=>{
    Blog.find().sort({createdAt: -1}).then((result)=>{
        res.render('index',{title:'Blogs',blogs:result})
    })
}

const blog_create_post = (req,res)=>{
    const blog = new Blog(req.body)

    blog.save().then((result)=>{
        res.redirect('/blogs')
    }).catch((err)=>{console.log(err)})
}

const blog_create_get = (req,res)=>{
    res.render('create',{title:'Create New Blog'})
}

const blog_details = (req,res)=>{
    const id = req.params.id
    Blog.findById(id).then((result)=>{
        res.render('details',{title:'Blog details',blog:result})
    }).catch(err => {
        console.log(err)
    })
}
const blog_delete = (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  }

module.exports = {
    blog_home,
    blog_create_post,
    blog_create_get,
    blog_details,
    blog_delete,
}