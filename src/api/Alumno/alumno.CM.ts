import DataNotFoundException from "../../exceptions/DataNotFoundException"
import BadRequestException from "../../exceptions/BadRequestException"
import alumnoModel, {alumno} from "../../interface/controllers/alumno.interface"


class AlumnosCM {
    // newUser is an object with the same structure as userSchema 
    // in this case: "nombre", "edad" and "correo".
    public Create = async (newUser:alumno) =>{
        if(newUser === null || newUser === undefined) {
            console.log('Usuario vacio al intentar crear'.red)
            return new BadRequestException("Envíe la información del Usuario que se va a registrar")
        }

        const user = await alumnoModel.create(newUser)
        return user
    }

    // Read funtion with a filter to get 1 by ID or all the collection
    public ReadOne = async (byID:string)=>{
        if (byID === null ||  byID === undefined || byID === ''){
            console.log('id vacio al intentar buscar usuario'.red);
            return new BadRequestException("Envíe el ID a modificar")
        }
        const user = await alumnoModel.findById(byID)
        return user
    }

    public Read = async ()=>{

        const users = await alumnoModel.find({}).exec()
        if(users === null || users === undefined) {
            console.log('Equipo no encontrado'.red);
            return new DataNotFoundException("No se encontraron usuarios");
        }
        return users;

    }


    // Update funtion with id and changes
    //changes has to be in json object form
    public Update = async (changes:any) =>{
        if (changes === null ||  changes === undefined){
            console.log('objeto vacio al intentar buscar usuario'.red);
            return new BadRequestException("Envíe el ID a modificar")
        }
        const ID = changes._id
        const user = await alumnoModel.updateOne({_id: ID}, changes, { new: true })
        return user
    }
    //Delete funtion to end CRUD
    public Delete = async (ID:string) =>{
        if (ID === null ||  ID === undefined || ID === ''){
            console.log('ID vacio al intentar buscar usuario'.red)
            return new BadRequestException("Envíe el ID de usuario a eliminar")
        }
        const user = await alumnoModel.deleteOne({_id:ID})
        return user
    }
}

export default AlumnosCM;