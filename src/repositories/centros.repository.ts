import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Centros, CentrosRelations, Citas} from '../models';
import {CitasRepository} from './citas.repository';

export class CentrosRepository extends DefaultCrudRepository<
  Centros,
  typeof Centros.prototype.id,
  CentrosRelations
> {

  public readonly citas: HasManyRepositoryFactory<Citas, typeof Centros.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('CitasRepository') protected citasRepositoryGetter: Getter<CitasRepository>,
  ) {
    super(Centros, dataSource);
    this.citas = this.createHasManyRepositoryFactoryFor('citas', citasRepositoryGetter,);
    this.registerInclusionResolver('citas', this.citas.inclusionResolver);
  }
}
