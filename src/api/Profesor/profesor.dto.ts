import { IsString, IsNotEmpty, IsDefined, IsNumber, IsOptional } from 'class-validator';
import { ValidateNested } from './ValidateNested';

class Profesor {
    @IsDefined({
        message: "el nombre del profesor no puede estar vacio."
    })
    @IsString({
        message: "el nombre del profesor debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el nombre del profesor no puede estar vacio."
    })
    public nombre!: String;

    @IsDefined({
        message: "el apellido paterno del profesor no puede estar vacio."
    })
    @IsString({
        message: "el apellido paterno del profesor debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el apellido paterno del profesor no puede estar vacio."
    })
    public apellidoP!: String;

    @IsDefined({
        message: "el apellido materno del profesor no puede estar vacio."
    })
    @IsString({
        message: "el apellido materno del profesor debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el apellido materno del profesor no puede estar vacio."
    })
    public apellidoM!: String;

    @IsDefined({
        message: "el apellido materno del profesor no puede estar vacio."
    })
    @IsNumber()
    @IsNotEmpty({
        message: "el apellido materno del profesor no puede estar vacio."
    })
    public genero!: Number;

}

export class createProfesor {
    @ValidateNested(Profesor)
    public profe!: Profesor;
}

class EditarProfe {
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
        message: "el nombre del profesor no puede estar vacio."
    })
    @IsString({
        message: "el nombre del profesor debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el nombre del profesor no puede estar vacio."
    })
    public nombre!: String;

    @IsOptional()
    @IsDefined({
        message: "el apellido paterno del profesor no puede estar vacio."
    })
    @IsString({
        message: "el apellido paterno del profesor debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el apellido paterno del profesor no puede estar vacio."
    })
    public apellidoP!: String;

    @IsOptional()
    @IsDefined({
        message: "el apellido materno del profesor no puede estar vacio."
    })
    @IsString({
        message: "el apellido materno del profesor debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el apellido materno del profesor no puede estar vacio."
    })
    public apellidoM!: String;

    @IsOptional()
    @IsDefined({
        message: "el apellido materno del profesor no puede estar vacio."
    })
    @IsNumber()
    @IsNotEmpty({
        message: "el apellido materno del profesor no puede estar vacio."
    })
    public genero!: Number;

    
}

export class UpdateUser {
    @IsDefined({
        message: "El Usuario no puede ser nulo"
    })
    @ValidateNested(EditarProfe)
    public usr!: EditarProfe
}