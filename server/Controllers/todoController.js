const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const pool = require('../config/db')

exports.createTodo = catchAsyncErrors(async (req,res,next)=>{
    const {description} = req.body

    const newTodo = await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *',[description])

    res.status(200).json({
        success:true,
        newTodo:newTodo.rows
    })
})

exports.getAllTodos = catchAsyncErrors(async(req,res,next)=>{
    const allTodos = await pool.query("SELECT * FROM todo")
    res.status(200).json({
        success:true,
        allTodos:allTodos.rows
    })
})

exports.getSingleTodo = catchAsyncErrors(async(req,res,next)=>{
    const {id} = req.params
    const singleTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id])
    res.status(200).json({
        success:true,
        singleTodo:singleTodo.rows
    })
})

exports.updateTodo = catchAsyncErrors(async(req,res,next)=>{
    const {id} = req.params;
    const {description} = req.body;

    await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description,id])

    res.status(200).json({
        success:true,
        message:'todo updated successfully!'
    })
})

exports.deleteTodo = catchAsyncErrors(async(req,res,next)=>{
    const {id} = req.params;

    await pool.query("DELETE FROM todo WHERE todo_id = $1",[id])

    res.status(200).json({
        success:true,
        message:"todo delted successfully!"
    })
})
