import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { ModuloEducativo, ModuloEducativoRelations } from '../models';
export declare class ModuloEducativoRepository extends DefaultCrudRepository<ModuloEducativo, typeof ModuloEducativo.prototype.id, ModuloEducativoRelations> {
    constructor(dataSource: MongodbDataSource);
}
