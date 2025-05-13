import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id}).populate("user");
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createTask = async (req, res) => {

    try {
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const getTask = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const updateTask = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const deleteTask = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}