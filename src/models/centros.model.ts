import {Entity, model, property, hasMany} from '@loopback/repository';
import {Citas} from './citas.model';

@model()
export class Centros extends Entity {
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
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  horario_atencion: string;

  @property({
    type: 'object',
    required: true,
  })
  ubicacion: {
    lat: number;
    lng: number;
  };

  @hasMany(() => Citas)
  citas: Citas[];

  constructor(data?: Partial<Centros>) {
    super(data);
  }
}

export interface CentrosRelations {
  // describe navigational properties here
}

export type CentrosWithRelations = Centros & CentrosRelations;
