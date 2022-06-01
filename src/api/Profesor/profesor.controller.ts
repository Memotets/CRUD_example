import { Request, Response, Router, NextFunction } from 'express';
import  Controller from '../../interface/controller.interface';
import validationMiddleware from '../../middleware/validation.middleware';
import { createProfesor, UpdateUser } from './profesor.dto';
import ProfesorCM from './profesor.CM';
import HttpException from '../../exceptions/HttpException';


class ProfesorController implements Controller{
    public router = Router();
    public path = '/profesor';
    private UserCM = new ProfesorCM();

    constructor(basePath: string) {
        this.path = basePath + this.path;
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(this.path + '/new',validationMiddleware(createProfesor, true), this.CreaterUser);
        this.router.get(this.path + '/:id', this.ReadOneUser);
        this.router.get(this.path + '/', this.ReadUsers);
        this.router.put(this.path + '/edit', validationMiddleware(UpdateUser, true), this.UpdateUser);
        this.router.delete(this.path + '/delete/:id', this.DeleteUser);
    }

    CreaterUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { user } = req.body;
        const respuesta = await this.UserCM.Create(user)

        if(respuesta instanceof HttpException) {
            res.status(400).send(respuesta);
        } else {
            res.send({ status: 200, ...respuesta });
        }
    }

    
    ReadOneUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { id } = req.params; 
        console.log(id)
        const respuesta = await this.UserCM.ReadOne(id);
        
        res.send(respuesta);
    }

    ReadUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { id } = req.params; 
        console.log(id)
        const respuesta = await this.UserCM.Read();
        
        res.send(respuesta);
    }
    

    UpdateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { user } = req.body;

        const respuesta = await this.UserCM.Update(user)

        if(respuesta instanceof HttpException) {
            res.status(400).send(respuesta);
        } else {
            res.send({ status: 200, ...respuesta });
        }
    }

    DeleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
        const {id} = req.params
        const respuesta = await this.UserCM.Delete(id);

        if(respuesta instanceof HttpException) {
            res.status(400).send(respuesta);
        } else {
            res.send({ status: 200, ...respuesta });
        }
    }


  
}

export default ProfesorController;