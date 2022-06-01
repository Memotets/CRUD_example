import { connect } from 'mongoose';

import App from './App';
import 'colors';

// Importaciones de controladores
import UserController from './api/User/user.controller';

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
        new UserController(path)
    ]
);

app.getApp();

console.log('Servidor iniciado');



