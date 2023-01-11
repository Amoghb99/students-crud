const express = require('express');
const app = express();
const studentExpressRoute = express.Router();
let StudentSchema = require('../model/student.model');

studentExpressRoute.route('/').get((req,res)=>{
    StudentSchema.find((error,data)=>{
    if(error){
        return next(error);
    }else {
        res.json(data);
    }
    })
})

studentExpressRoute.route('/student/:id').get((req,res)=>{
    StudentSchema.findById(req.params.id,(error,data)=>{
    if(error){
        return next(error);
    }else {
        res.json(data);
    }
})
})

studentExpressRoute.route('/add').post((req,res,next)=>{
    StudentSchema.create(req.body,(error,data)=>{
    if(error){
        return next(error);
    }else {
        res.json(data);
    }
})
})


studentExpressRoute.route('/delete/:id').delete((req,res)=>{
    StudentSchema.findByIdAndDelete(req.params.id,(error,data)=>{
    if(error){
        return next(error);
    }else {
        res.status(200).json({
            msg:data
        })
            }
})
})

studentExpressRoute.route('/update/:id').put((req,res)=>{
    StudentSchema.findByIdAndUpdate(req.params.id,{$set: req.body},(error,data)=>{
    if(error){
        return next(error);
    }else {
        res.json(data);
        console.log("Updated");
    }
})
})

module.exports = studentExpressRoute;