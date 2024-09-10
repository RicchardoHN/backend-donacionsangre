import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Centros,
  Citas,
} from '../models';
import {CentrosRepository} from '../repositories';

export class CentrosCitasController {
  constructor(
    @repository(CentrosRepository) protected centrosRepository: CentrosRepository,
  ) { }

  @get('/centros/{id}/citas', {
    responses: {
      '200': {
        description: 'Array of Centros has many Citas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Citas)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Citas>,
  ): Promise<Citas[]> {
    return this.centrosRepository.citas(id).find(filter);
  }

  @post('/centros/{id}/citas', {
    responses: {
      '200': {
        description: 'Centros model instance',
        content: {'application/json': {schema: getModelSchemaRef(Citas)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Centros.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Citas, {
            title: 'NewCitasInCentros',
            exclude: ['id'],
            optional: ['centrosId']
          }),
        },
      },
    }) citas: Omit<Citas, 'id'>,
  ): Promise<Citas> {
    return this.centrosRepository.citas(id).create(citas);
  }

  @patch('/centros/{id}/citas', {
    responses: {
      '200': {
        description: 'Centros.Citas PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Citas, {partial: true}),
        },
      },
    })
    citas: Partial<Citas>,
    @param.query.object('where', getWhereSchemaFor(Citas)) where?: Where<Citas>,
  ): Promise<Count> {
    return this.centrosRepository.citas(id).patch(citas, where);
  }

  @del('/centros/{id}/citas', {
    responses: {
      '200': {
        description: 'Centros.Citas DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Citas)) where?: Where<Citas>,
  ): Promise<Count> {
    return this.centrosRepository.citas(id).delete(where);
  }
}
