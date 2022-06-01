import { Schema, model } from 'mongoose'
export interface alumno {
    nombre: string,
    apellidoP: string,
    apellidoM: string,
    genero: number,
    nacimiento: Date,
}

export const alumnoSchema = new Schema<alumno>({
    nombre: { type: String, required: true },
    apellidoP: { type: String, required: true },
    apellidoM: { type: String, required: true },
    genero: { type:Number, required:true, min:0, max:1},
    nacimiento: { type: Date, required: true },
})

const alumnoModel = model("alumno", alumnoSchema)

export default alumnoModel;