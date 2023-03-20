import { Injectable } from '@angular/core';
import { BackendService } from '../../utils/backend.service';
import { map, Observable } from 'rxjs';
import { DirectionModel } from './contactanos.model';

@Injectable({
  providedIn: 'root'
})
export class ContactanosService {

  constructor(
    private backend: BackendService
  ) {
  }

  getDirections(cp: string): Observable<DirectionModel[]> {
    const path = `${ this.backend.getEndpoint('get-direction') }/${ cp }`;
    return this.backend
      .Get('core', path)
      .pipe(map(value => JSON.parse(value.CatalogoJsonString)));
  }

}
