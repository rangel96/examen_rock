import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface BackendData {
  server: string;
  nickname: string;
  port?: number;
  description?: string;
  documentation?: string;
}

export interface Endpoint {
  url: string;
  key: string;
  description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BackendService {

  /***
   * Server connection services
   * @private
   * */
  private backend: BackendData[] = [
    {
      server: 'https://web.aarco.com.mx',
      nickname: 'core',
      description: '',
      documentation: 'https://docs.mapbox.com/api'
    },
  ];

  constructor(
    private http: HttpClient,
  ) { }


  /***
   * Get Base Url
   * @param nickname: string
   * */
  private getBaseURL(nickname: string): string {
    const result: BackendData | undefined = this.backend.find(service => service.nickname === nickname);
    return `${ result?.server }`;
  }


  /***
   * Return second part of URL
   * @param key: string => ID the identity
   * */
  getEndpoint(key: string): string | undefined {
    const result: Endpoint | undefined = this.endpointService.find(service => service.key === key);
    return result?.url;
  }

  /***
   * Return service GET
   * @param nickname: string => Server name
   * @param path: string => Specific path to POST
   * @param includeToken: boolean => Include token default?
   * */
  Get(
    nickname: string,
    path: string,
    includeToken = false,
  ): Observable<any> {
    const url = `${ this.getBaseURL(nickname) }${ path }`;
    return this.http.get(url, { withCredentials: includeToken });
  }



  /***
   * All Endpoints defined
   * */
  protected endpointService: Endpoint[] = [
    // ? Get Dirección
    {
      url: '/api-examen/api/examen/sepomex',
      key: 'get-direction',
      description: 'Get array of directions',
    },
  ];

}
