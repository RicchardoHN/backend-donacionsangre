import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Usuarios } from '../models';
export declare class UsuariosRepository extends DefaultCrudRepository<Usuarios, typeof Usuarios.prototype.id> {
    constructor(dataSource: MongodbDataSource);
}
