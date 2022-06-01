import { Schema, model } from 'mongoose'
export interface alumnoGrado {
    alumnoID: string,
    gradoID: string,
    seccion: string,
}

export const alumnoGradoSchema = new Schema<alumnoGrado>({
    alumnoID: { type: String, required: true },
    gradoID: { type: String, required: true },
    seccion: { type: String, required: true},
})

const alumnoGradoModel = model("alumnoGrado", alumnoGradoSchema)

export default alumnoGradoModel;