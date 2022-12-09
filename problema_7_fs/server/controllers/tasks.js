const {Task} = require('../models')

const createTask = async (req, res) => {
    const {title, description, date, priority, completed} = req.body
    try{
        const task = await Task.create({
            title,
            description,
            date,
            priority,
            completed: completed || false
        })
        res.status(201).send(task)
    }
    catch(err){
        res.status(500).send({
            error: `An error has occured trying to create the task: ${err}`
        })
    }
}

const getTasks = async (_req, res) => {
    try{
        const tasks = await Task.findAll()
        res.status(200).send(tasks)
    }
    catch(err){
        res.status(500).send({
            error: `An error has occured trying to fetch the tasks: ${err}`
        })
    }
}
const getTask = async (req, res) => {
    try{
        const {id} = req.params
        const task = await Task.findOne({
            where: {id}
        })
        if(!task){
            return res.status(403).send({
                error: `No task found with id: ${id}`
            })
        }
        res.status(200).send(task)
    }
    catch(err){
        res.status(500).send({
            error: `An error has occured trying to fetch the task: ${err}`
        })
    }
}

const deleteTask = async (req, res) => {
    try{
        const {id} = req.params
        const task = await Task.findOne({
            where: {id}
        })
        if(!task){
            return res.status(403).send({
                error: `No task found with id: ${id}`
            })
        }
        await task.destroy()
        res.status(200).send(task)
    }
    catch(err){
        res.status(500).send({
            error: `An error has occured trying to delete the task: ${err}`
        })
    }
}

const updateTask = async (req, res) => {
    try{
        const {id} = req.params
        const {title, description, date, priority, completed} = req.body
        const task = await Task.findOne({
            where: {id}
        })
        if(!task){
            return res.status(403).send({
                error: `No task found with id: ${id}`
            })
        }
        await task.update({
            title,
            description,
            date,
            priority,
            completed
        })
        res.status(200).send(task)
    }
    catch(err){
        res.status(500).send({
            error: `An error has occured trying to update the task: ${err}`
        })
    }
}


module.exports = {
    createTask,
    getTasks,
    deleteTask,
    updateTask, 
    getTask
}