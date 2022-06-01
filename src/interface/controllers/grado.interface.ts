import { Schema, model } from 'mongoose'
export interface grado {
    nombre: string,
    profesor: string,
}

export const gradoSchema = new Schema<grado>({
    nombre: { type: String, required: true },
    profesor: { type: String, required: true },
})

const gradoModel = model("grado", gradoSchema)

export default gradoModel;