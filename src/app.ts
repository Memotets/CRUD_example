// Importaciones necesarias para el funcionamiento de la API
import * as express from 'express';
import * as bodyParser from 'body-parser';

// Importación de la estructura de los controladores
import Controller from './interface/controller.interface';

class App {
    // declaracion para uso de express
    private app: express.Application;

    // constructor para creacion de API donde intancia todos los endpoints creados.
    constructor(controllers: Controller[]) {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    // inicializa middlewares
    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.setPort();
    }

    // inicializa inicia e instancia los controladores creados
    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

    // coloca el puerto a utilizar para API
    private setPort() {
        this.app.set('port', 3000);
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }

    // obtiene toda la intancia de APP creada
    public getApp() {
        return this.app;
    }
}

export default App;