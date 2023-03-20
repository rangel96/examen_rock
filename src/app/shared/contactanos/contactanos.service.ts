import { Injectable } from '@angular/core';
import { BackendService } from '../../utils/backend.service';
import { map, Observable } from 'rxjs';
import { CatalogoModel } from './contactanos.result.model';
import { UbicacionModel } from './contactanos.response.model';

@Injectable({
  providedIn: 'root'
})
export class ContactanosService {

  constructor(private backend: BackendService) {}

  getDirections(cp: string): Observable<UbicacionModel[]> {
    const path = `${ this.backend.getEndpoint('get-direction') }/${ cp }`;
    return this.backend
      .Get('core', path)
      .pipe(map(({ CatalogoJsonString }) => {
        const CatalogoStringJson: CatalogoModel[] = JSON.parse(CatalogoJsonString);
        return CatalogoStringJson.map(({ Municipio, Ubicacion }) => ({
          estado: Municipio.Estado.sEstado,
          municipio: Municipio.sMunicipio,
          colonias: Ubicacion.map(({ sUbicacion }) => sUbicacion),
        }));
      }));
  }

}
