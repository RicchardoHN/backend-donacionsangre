import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Historial, HistorialRelations } from '../models';
export declare class HistorialRepository extends DefaultCrudRepository<Historial, typeof Historial.prototype.id, HistorialRelations> {
    constructor(dataSource: MongodbDataSource);
}
