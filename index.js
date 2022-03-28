
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const Blog=require('./models/blog');
const seedDb=require('./seed');
const methodOverride=require('method-override');


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('Connected to database');
})
.catch((err)=>{
    console.log(err);
})

seedDb();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));


app.get('/',(req,res)=>{
    res.send('Welcome to Blogging Website');
})

const blogRoutes = require('./routes/blogRoutes');

app.use(blogRoutes);


let port=process.env.PORT||2323;

app.listen(port,(req,res)=>{
    console.log(`Server connted at port: ${port}`);
})