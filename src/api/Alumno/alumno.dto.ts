import { IsString, IsNotEmpty, IsDefined, IsNumber, IsOptional } from 'class-validator';
import { ValidateNested } from '../Profesor/ValidateNested';

class Alumno {
    @IsDefined({
        message: "el nombre del alumno no puede estar vacio."
    })
    @IsString({
        message: "el nombre del alumno debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el nombre del alumno no puede estar vacio."
    })
    public nombre!: String;

    @IsDefined({
        message: "el apellido paterno del alumno no puede estar vacio."
    })
    @IsString({
        message: "el apellido paterno del alumno debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el apellido paterno del alumno no puede estar vacio."
    })
    public apellidoP!: String;

    @IsDefined({
        message: "el apellido materno del alumno no puede estar vacio."
    })
    @IsString({
        message: "el apellido materno del alumno debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el apellido materno del alumno no puede estar vacio."
    })
    public apellidoM!: String;

    @IsDefined({
        message: "el apellido materno del alumno no puede estar vacio."
    })
    @IsNumber()
    @IsNotEmpty({
        message: "el apellido materno del alumno no puede estar vacio."
    })
    public genero!: Number;

    @IsDefined({
        message: "la fecha de nacimiento del alumno no puede estar vacio."
    })
    @IsString({
        message: "la fecha de nacimiento del alumno debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "la fecha de nacimiento del alumno no puede estar vacio."
    })
    public nacimiento!: String;

}

export class createalumno {
    @ValidateNested(Alumno)
    public alumno!: Alumno;
}

class EditarAlumno {
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
        message: "el nombre del alumno no puede estar vacio."
    })
    @IsString({
        message: "el nombre del alumno debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el nombre del alumno no puede estar vacio."
    })
    public nombre!: String;

    @IsOptional()
    @IsDefined({
        message: "el apellido paterno del alumno no puede estar vacio."
    })
    @IsString({
        message: "el apellido paterno del alumno debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el apellido paterno del alumno no puede estar vacio."
    })
    public apellidoP!: String;

    @IsOptional()
    @IsDefined({
        message: "el apellido materno del alumno no puede estar vacio."
    })
    @IsString({
        message: "el apellido materno del alumno debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el apellido materno del alumno no puede estar vacio."
    })
    public apellidoM!: String;

    @IsOptional()
    @IsDefined({
        message: "el genero del alumno no puede estar vacio."
    })
    @IsNumber()
    @IsNotEmpty({
        message: "el genero del alumno no puede estar vacio."
    })
    public genero!: Number;
    
    @IsOptional()
    @IsDefined({
        message: "la fecha de nacimiento del alumno no puede estar vacio."
    })
    @IsString({
        message: "la fecha de nacimiento del alumno debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "la fecha de nacimiento del alumno no puede estar vacio."
    })
    public nacimiento!: String;

    
}

export class UpdateAlumno {
    @IsDefined({
        message: "El Usuario no puede ser nulo"
    })
    @ValidateNested(EditarAlumno)
    public alumno!: EditarAlumno
}