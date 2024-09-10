import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Historial, HistorialRelations} from '../models';

export class HistorialRepository extends DefaultCrudRepository<
  Historial,
  typeof Historial.prototype.id,
  HistorialRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Historial, dataSource);
  }
}
