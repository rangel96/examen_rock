export interface DirectionModel {
  municipio: Municipio;
  ubicacion: Ubicacion[];
}

export interface Municipio {
  iIDMunicipio:           number;
  estado:                 Estado;
  iMunicipioEstado:       number;
  iClaveMunicipioCepomex: number;
  sMunicipio:             string;
}

export interface Estado {
  iIDEstado:           number;
  pais:                null;
  iEstadoPais:         number;
  iClaveEstadoCepomex: number;
  sEstado:             string;
}

export interface Ubicacion {
  iIDUbicacion:           number;
  codigoPostal:           null;
  iUbicacionCodigoPostal: number;
  tipoUbicacion:          null;
  iClaveUbicacionCepomex: number;
  ciudad:                 null;
  sUbicacion:             string;
}
