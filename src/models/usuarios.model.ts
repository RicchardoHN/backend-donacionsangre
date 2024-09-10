import {Entity, model, property, hasMany} from '@loopback/repository';
import {Citas} from './citas.model';
import {Notificaciones} from './notificaciones.model';

@model()
export class Usuarios extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo_sangre: string;

  @property({
    type: 'string',
    required: true,
  })
  rol: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_registro: string;

  @hasMany(() => Citas, {keyTo: 'id_usuario'})
  citas: Citas[];

  @hasMany(() => Notificaciones, {keyTo: 'id_usuario'})
  notificaciones: Notificaciones[];

  constructor(data?: Partial<Usuarios>) {
    super(data);
  }
}
