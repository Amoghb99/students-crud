const express=require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors= require('cors');
bodyParser = require('body-parser');
dbConfig = require('./db/database');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser:true, useUnifiedTopology:true,
}).then(()=>{
    console.log('database connected');
}).catch((error)=>{
    console.log(error);
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(cors());
const userRoute = require('./routes/student.routes');

app.use('/endpoint',userRoute);

const server= app.listen(3000, ()=>{
    console.log("Connected to post 3000");
})

app.use('/',userRoute);

app.get('/', ()=>{
    console.log("INVALID");
});

app.use(function (err,req,res,next){
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
}) //error



