import { DataSource } from "typeorm";
import {Book} from "./entity/Book.js"
const AppDataSource = new DataSource({
    type :"mysql",
    host :"localhost",
    port :3306,
    username :"root",
    password :"",
    database :"book-db",
    synchronize :true,
    logging :false,
    entities:[Book],
    subscribers:[],
    migrations:[]

})
export default AppDataSource;