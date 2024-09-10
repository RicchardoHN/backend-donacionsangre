import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Citas, CitasRelations} from '../models';

export class CitasRepository extends DefaultCrudRepository<
  Citas,
  typeof Citas.prototype.id,
  CitasRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Citas, dataSource);
  }
}
