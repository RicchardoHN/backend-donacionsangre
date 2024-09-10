import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Usuarios} from './usuarios.model';
import {Centros} from './centros.model';

@model()
export class Citas extends Entity {
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
  id_usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  id_centro: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'date',
    required: true,
  })
  hora: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @belongsTo(() => Usuarios, {keyFrom: 'id_usuario', keyTo: 'id'})
  usuario: string;

  @belongsTo(() => Centros, {keyFrom: 'id_centro', keyTo: 'id'})
  centro: string;

  @property({
    type: 'string',
  })
  centrosId?: string;

  constructor(data?: Partial<Citas>) {
    super(data);
  }
}

export interface CitasRelations {
  // describe navigational properties here
}

export type CitasWithRelations = Citas & CitasRelations;
