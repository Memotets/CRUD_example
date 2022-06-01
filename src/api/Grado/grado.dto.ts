import { IsString, IsNotEmpty, IsDefined, IsOptional } from 'class-validator';
import { ValidateNested } from '../Profesor/ValidateNested';

class Grado {
    @IsDefined({
        message: "el nombre del grado no puede estar vacio."
    })
    @IsString({
        message: "el nombre del grado debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el nombre del grado no puede estar vacio."
    })
    public nombre!: String;

    @IsDefined({
        message: "el profesor del grado no puede estar vacio."
    })
    @IsString({
        message: "el profesor del grado debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el profesor del grado no puede estar vacio."
    })
    public profesorID!: String;


}

export class createGrado {
    @ValidateNested(Grado)
    public grado!: Grado;
}

class EditarGrado {
    @IsDefined({
        message: "El id del grado no puede ser nulo."
    })
    @IsString({
        message: "El id del grado debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "El id del grado no puede ser una cadena vacía."
    })
    public id!: string;

    @IsOptional()
    @IsDefined({
        message: "el nombre del Grado no puede estar vacio."
    })
    @IsString({
        message: "el nombre del Grado debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el nombre del Grado no puede estar vacio."
    })
    public nombre!: String;

    @IsOptional()
    @IsDefined({
        message: "el profesor del grado no puede estar vacio."
    })
    @IsString({
        message: "el profesor del grado debe de ser de tipo string."
    })
    @IsNotEmpty({
        message: "el profesor del grado no puede estar vacio."
    })
    public apellidoP!: String;

    
}

export class UpdateGrado {
    @IsDefined({
        message: "El Usuario no puede ser nulo"
    })
    @ValidateNested(EditarGrado)
    public Grado!: EditarGrado
}