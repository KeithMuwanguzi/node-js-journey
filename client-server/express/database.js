const mongoose = require('mongoose')
const DBurl = require('./constants')

const conn = mongoose.connect(DBurl,{useNewUrlParser:true,useUnifiedTopology:true})

module.exports = conn