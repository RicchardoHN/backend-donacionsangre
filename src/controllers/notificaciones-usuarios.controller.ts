import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Notificaciones,
  Usuarios,
} from '../models';
import {NotificacionesRepository} from '../repositories';

export class NotificacionesUsuariosController {
  constructor(
    @repository(NotificacionesRepository)
    public notificacionesRepository: NotificacionesRepository,
  ) { }

  @get('/notificaciones/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Usuarios belonging to Notificaciones',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Usuarios),
          },
        },
      },
    },
  })
  async getUsuarios(
    @param.path.string('id') id: typeof Notificaciones.prototype.id,
  ): Promise<Usuarios> {
    return this.notificacionesRepository.usuarios(id);
  }
}
