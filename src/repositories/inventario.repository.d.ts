import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Inventario, InventarioRelations } from '../models';
export declare class InventarioRepository extends DefaultCrudRepository<Inventario, typeof Inventario.prototype.id, InventarioRelations> {
    constructor(dataSource: MongodbDataSource);
}
