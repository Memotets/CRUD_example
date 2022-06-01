import { Schema, model } from 'mongoose'
export interface profesor {
    nombre: string,
    apellidoP: string,
    apellidoM: string,
    genero: number,
}

export const profesorSchema = new Schema<profesor>({
    nombre: { type: String, required: true },
    apellidoP: { type: String, required: true },
    apellidoM: { type: String, required: true },
    genero: { type:Number, required:true, min:0, max:1},
})

const profesorModel = model("profesor", profesorSchema)

export default profesorModel;