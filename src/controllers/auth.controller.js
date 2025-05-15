/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
*/
import { response } from "express";
import { createAccessToken } from "../libs/jwt.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";



export const register = async (req, res) => {
    
    const { username, email, password } = req.body;

    try {
        
        if(!username || !email || !password) {
            return res.status(400).json({ msg: "Todos los campos son obligatorios." });
        }

        const userFoundWithEmail = await User.findOne({email});
        const userFoundWithUserName = await User.findOne({username});
        
        if(userFoundWithEmail)
        {
            return res.status(400).json(["El email ya existe"]);
        }

         if(userFoundWithUserName)
        {
            return res.status(400).json(["El nombre de usuario ya existe"]);
        }


        const passwordHash = bcrypt.hashSync(password, 10);

        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        // console.log(newUser);

        const userSaved = await newUser.save();

        // creacion del token de acceso
        const token = await createAccessToken({
            id: userSaved._id
        });

        res.cookie("token", token, {
           
        });
        
        res.status(201).json({
            msg: "Usuario creado correctamente.",
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error al registrar un nuevo usuario en la Base de datos."});
    }

    
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userFound = await User.findOne({email});

        if(!userFound)
        {
            return res.status(400).json({
                message: ["El email no existe."],
            });
        }

        const isMatch = await bcrypt.compare(password, userFound.password);
        if(!isMatch) {
            return res.status(400).json({
                message: ["La contraseña es incorrecta."]
            });
        }

        const token = await createAccessToken({
            id: userFound._id,
            username: userFound.username,
        });

        res.cookie("token", token, {

        });

        res.json({
            msg: "El usuario fue logeado correctamente.",
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
    
export const logout = async (req, res = response) => {
    res.cookie("token", "", {
        httpOnly: true,
        secure: true,
        expires: new Date(0)
    });
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);
    if(!userFound) return res.status(400).json({message: "Usuario no encontrado."});

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email
    });
}

export const verifyToken = async (req, res) =>
{
    const { token } = req.cookies;

    if(!token) return res.status(401).json({ message: "No esta autorizado"});

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        
        if(err) return res.status(401).json({ message: "No esta autorizado"})
        
        const userFound = await User.findById(user.id);
        if(!userFound) return res.status(401).json({message: "No Autorizado"});

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        });
        
    });
}