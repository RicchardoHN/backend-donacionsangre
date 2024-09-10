import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Citas, CitasRelations } from '../models';
export declare class CitasRepository extends DefaultCrudRepository<Citas, typeof Citas.prototype.id, CitasRelations> {
    constructor(dataSource: MongodbDataSource);
}
