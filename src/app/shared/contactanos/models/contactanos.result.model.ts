export interface CatalogoModel {
  Municipio: Municipio;
  Ubicacion: Ubicacion[];
}

interface Municipio {
  iIDMunicipio:           number;
  Estado:                 Estado;
  iMunicipioEstado:       number;
  iClaveMunicipioCepomex: number;
  sMunicipio:             string;
}

interface Estado {
  iIDEstado:           number;
  Pais:                null;
  iEstadoPais:         number;
  iClaveEstadoCepomex: number;
  sEstado:             string;
}

interface Ubicacion {
  iIDUbicacion:           number;
  CodigoPostal:           null;
  iUbicacionCodigoPostal: number;
  TipoUbicacion:          null;
  iClaveUbicacionCepomex: number;
  Ciudad:                 null;
  sUbicacion:             string;
}
