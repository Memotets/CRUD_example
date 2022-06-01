import { Schema, model } from 'mongoose'
export interface user {
    nombre: string,
    edad: number,
    correo: string,
}
export const userSchema = new Schema<user>({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    correo: { type: String, required: true },
})

const UserModel = model("usuario", userSchema)

export default UserModel;