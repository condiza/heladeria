import express, { Application } from 'express';
import morgan from 'morgan';

//Rooutes
import indexRoutes from './routes/index.routes';
import flavorsRoutes from './routes/flavors.routes';
import usersRoutes from './routes/user.routes';
import toppingRoutes from './routes/toppings.routes';
import ordersRoutes from './routes/orders.routes';
import ordersDetailsiRoutes from './routes/order_details.routes';
import authRoutes from './routes/auth.routes'

export class App{

    private app : Application;

    // resivimos la instacia con dos posibles valores y ademas definimos el puerto de forma que sea o no necesario
    constructor(private PORT?: number | string){
        //se crea la propiedad de la clase
        this.app = express();
        //ejecutamos el metodo para poder mostrar el puerto
        this.settings();
        this.middlewares();
        this.routes();
    }

    //creamos un metodo para utilizar nuesto puerto
    settings(){
        //pasamos el puerto pero tambien ponemos uno como predeterminado
        this.app.set('PORT',this.PORT || process.env.PORT || 3000)
    }
    //utilizamos morgan para registrar solicitudes HTTP
    middlewares(){
        //esto es para mostrar por consola algunos valores de desarrollo
        this.app.use(morgan('dev'));
        //esta linea nos ayuda para definir que vamos a resivir cosultas de tipo json 
        this.app.use(express.json());
    }

    //Routes 
    routes(){
        this.app.use(indexRoutes);
        this.app.use('/flavors', flavorsRoutes);
        this.app.use('/users',usersRoutes);
        this.app.use('/topping',toppingRoutes);
        this.app.use('/orders',ordersRoutes);
        this.app.use('/ordersdetails',ordersDetailsiRoutes);
        this.app.use('/auth',authRoutes)
    }


    async listen(){
        await this.app.listen(this.app.get('PORT'));
        console.log('Server in PORT',this.app.get('PORT'));
        
    }

}