const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')
var bodyParser = require('body-parser');
//Importing routes

const postsRoute = require('./routes/posts')
const ordersRoute = require('./routes/orders')
const productsRoute = require('./routes/products')
 

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/post',postsRoute);
app.use('/products',productsRoute);
app.use('/orders',ordersRoute);


/*app.use('/post',()=>{

    console.log("This is middleware");
})*/
//Home route


app.get('/',(req,res)=>{
    res.send('This is Home Page')
});



app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.json({
        err:{
            message: err.message
        }
    });

});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
{ 
    useUnifiedTopology: true,
    useMongoClient: true

},()=>
{

    console.log("DB CONNECTED");
});


//Listening port
app.listen(3000);
module.exports = app;
