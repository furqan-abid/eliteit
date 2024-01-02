const express = require('express')
const { createTodo, getAllTodos, getSingleTodo, deleteTodo, updateTodo } = require('../Controllers/todoController')

const router = express.Router()

router.route('/todo/create').post(createTodo)
router.route('/todos').get(getAllTodos)
router.route('/todo/:id').get(getSingleTodo)
router.route('/todo/delete/:id').delete(deleteTodo)
router.route('/todo/update/:id').put(updateTodo)

module.exports = router
