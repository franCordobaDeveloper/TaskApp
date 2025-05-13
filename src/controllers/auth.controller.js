/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
*/
import { createAccessToken } from "../libs/jwt.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";



export const register = async (req, res) => {
    
    const { username, email, password } = req.body;

    try {
        
        if(!username || !email || !password) {
            return res.status(400).json({ msg: "Todos los campos son obligatorios." });
        }

        const userFound = await User.findOne({email});

        if(userFound)
        {
            return res.status(400).json({
                msg: ["El email ya esta en uso por favor ingresar otro."],
            });
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

    } catch (error) {
        
    }
}
    
