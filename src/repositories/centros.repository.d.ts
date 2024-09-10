import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Centros, CentrosRelations } from '../models';
export declare class CentrosRepository extends DefaultCrudRepository<Centros, typeof Centros.prototype.id, CentrosRelations> {
    constructor(dataSource: MongodbDataSource);
}
