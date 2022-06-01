import { IsString, IsNotEmpty, IsDefined, IsNumber, IsOptional } from 'class-validator';
import { ValidateNested } from './ValidateNested';

class User {
    @IsDefined({
        message: "El nombre del Equipo no puede estar vacio."
    })
    @IsString({
        message: "El nombre del Equipo debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "El nombre del usuario no puede estar vacio."
    })
    public nombre!: String;

    @IsDefined({
        message: "La edad no puede estar vacia."
    })
    @IsNumber()
    @IsNotEmpty({
        message: "La edad no puede estar vacia."
    })
    public edad!: Number;

    @IsDefined({
        message: "El email del Usuario no puede estar vacio."
    })
    @IsString({
        message: "El email del Usuario debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "El email del Usuario no puede estar vacio."
    })
    public email!: String;


}

export class CreateUser {
    @ValidateNested(User)
    public usr!: User;
}

class Editar {
    @IsDefined({
        message: "El id del Usuario no puede ser nulo."
    })
    @IsString({
        message: "El id del Usuario debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "El id del Usuario no puede ser una cadena vacía."
    })
    public id!: string;

    @IsOptional()
    @IsDefined({
        message: "El nombre del Equipo no puede estar vacio."
    })
    @IsString({
        message: "El nombre del Equipo debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "El nombre del usuario no puede estar vacio."
    })
    public nombre!: String;

    @IsOptional()
    @IsDefined({
        message: "La edad no puede estar vacia."
    })
    @IsNumber()
    @IsNotEmpty({
        message: "La edad no puede estar vacia."
    })
    public edad!: Number;
    
    @IsOptional()
    @IsDefined({
        message: "El email del Usuario no puede estar vacio."
    })
    @IsString({
        message: "El email del Usuario debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "El email del Usuario no puede estar vacio."
    })
    public email!: String;
   
}

export class UpdateUser {
    @IsDefined({
        message: "El Usuario no puede ser nulo"
    })
    @ValidateNested(Editar)
    public usr!: Editar
}