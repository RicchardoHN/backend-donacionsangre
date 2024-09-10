import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {ModuloEducativo, ModuloEducativoRelations} from '../models';

export class ModuloEducativoRepository extends DefaultCrudRepository<
  ModuloEducativo,
  typeof ModuloEducativo.prototype.id,
  ModuloEducativoRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(ModuloEducativo, dataSource);
  }
}
