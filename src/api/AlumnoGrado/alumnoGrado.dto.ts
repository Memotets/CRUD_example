import { IsString, IsNotEmpty, IsDefined, IsOptional } from 'class-validator';
import { ValidateNested } from '../Profesor/ValidateNested';

class AlumnoGrado {
    @IsDefined({
        message: "el id del alumno no puede estar vacio."
    })
    @IsString({
        message: "el id del alumno debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el id del alumno no puede estar vacio."
    })
    public alumnoID!: String;

    @IsDefined({
        message: "el id del grado no puede estar vacio."
    })
    @IsString({
        message: "el id del grado debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el id del grado no puede estar vacio."
    })
    public gradoID!: String;

    @IsDefined({
        message: "la seccion no puede estar vacio."
    })
    @IsString({
        message: "la seccion debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "la seccion no puede estar vacio."
    })
    public seccion!: String;


}

export class createAlumnoGrado {
    @ValidateNested(AlumnoGrado)
    public alGr!: AlumnoGrado;
}

class EditarAlumnoGrado {
    @IsDefined({
        message: "El id  no puede ser nulo."
    })
    @IsString({
        message: "El id debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "El id no puede ser una cadena vacía."
    })
    public id!: string;

    @IsOptional()
    @IsDefined({
        message: "el id del alumno no puede estar vacio."
    })
    @IsString({
        message: "el id del alumno debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el id del alumno no puede estar vacio."
    })
    public alumnoID!: String;

    @IsOptional()
    @IsDefined({
        message: "el id del grado no puede estar vacio."
    })
    @IsString({
        message: "el id del grado debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el id del grado no puede estar vacio."
    })
    public gradoID!: String;

    @IsOptional()
    @IsDefined({
        message: "la seccion no puede estar vacio."
    })
    @IsString({
        message: "la seccion debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "la seccion no puede estar vacio."
    })
    public seccion!: String;

    
}

export class UpdateGrado {
    @IsDefined({
        message: "El Usuario no puede ser nulo"
    })
    @ValidateNested(EditarAlumnoGrado)
    public Grado!: EditarAlumnoGrado
}