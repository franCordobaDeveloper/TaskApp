import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/taskdb');
    console.log("MongoDB conectado");
  } catch (error) {
    console.error(`Error en la conexion a la base de datos ${error}`);
  }
};