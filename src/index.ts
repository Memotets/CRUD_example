import { connect } from 'mongoose';

import App from './App';
import 'colors';

// Importaciones de controladores
import AlumnoController from './api/Alumno/alumno.controller';
import ProfesorController from './api/Profesor/profesor.controller';
import GradoController from './api/Grado/grado.controller';
import AlumnoGradoController from './api/AlumnoGrado/alumnoGrado.controller';

const url ='mongodb://localhost/pruebaCRUD'

console.log('Mode: dev')

// Conexion a Mongo
connect(url)
    .then(() => {
        console.log('Conectado a la base de datos');
    })
    .catch(error => {
        console.error(`${error}`);
    });

const path = '/PRUEBA';

const app = new App(
    [
        new AlumnoController(path),
        new ProfesorController(path),
        new GradoController(path),
        new AlumnoGradoController(path),
    ]
);

app.getApp();

console.log('Servidor iniciado');



