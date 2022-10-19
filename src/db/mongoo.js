

import mongoose from 'mongoose';
export const dbConnect = () => {
    /*
    procces = {
       DB_URI:*****************,
       PORT:***** 
    }
    */

    const DB_URI = `mongodb+srv://prime:YiXfo3wMLwQfc8Vw@cluster0.tpagh3c.mongodb.net/misionriqueza?retryWrites=true&w=majority`;
    //const DB_URI = process.env.DB_URI;
    
    // variable para definir la condicion de entrada a la base de datos
    const mongooseArgs = {
        useNewUrlParser: true,
    }

    //  arrow function callback que se ejecuta cuando se conecta a la base de datos __init__
    const callback = (err, res) => {
        if(!err){
            console.log("****** Conexion exitosa *******")
        }else{
            console.log("****** error en la conexion *****")
            console.log(err)
        }
    }

    // el objecto mongoose utiliza el metodo connect llama a la URI que es la llave y utiliza el callback
    mongoose.connect(DB_URI,mongooseArgs,callback)
}
