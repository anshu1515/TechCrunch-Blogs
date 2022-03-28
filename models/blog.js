const mongoose=require('mongoose');

//create a schema for movie blog
const blogSchema=new mongoose.Schema({
    img:{
        type:String,
        trim:true,
        default:'/images/blog.jpg'
    },
    date:{
        type:String,
        required:true
    },
    title:{
        type:String,
        trim:true,
        required:true
    },
    desc:{
        type:String,
        trim:true
    }
})

const Blog=mongoose.model('Blog',blogSchema);
module.exports=Blog;