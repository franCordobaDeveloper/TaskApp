/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
*/
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
    
    const { username, email, password } = req.body;

    try {
        
        if(!username || !email || !password) {
            return res.status(400).json({ msg: "Todos los campos son obligatorios." });
        }

        const passwordHash = bcrypt.hashSync(password, 10);

        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        // console.log(newUser);

        const userSaved = await newUser.save();

        res.status(201).json({
            msg: "Usuario creado correctamente.",
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error al registrar un nuevo usuario en la Base de datos."});
    }

    
}



export const login = (req, res) => res.send("login");
    
