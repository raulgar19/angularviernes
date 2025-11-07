import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import axios from 'axios';

@Injectable()
export class ServicePersona {
  constructor(private _http: HttpClient) {}

  getPersonas(): Promise<any> {
    return new Promise((resolve) => {
      var url = environment.urlApiPersonas;
      var request = 'api/personas';
      this._http.get(url + request).subscribe((response) => {
        console.log('Obteniendo personas desde http...');
        resolve(response);
      });
    });
  }
  getPersonasAxios(): Promise<any> {
    return new Promise((resolve) => {
      var url = environment.urlApiPersonas;
      var request = 'api/personas';
      axios.get(url + request).then((response) => {
        console.log('Obteniendo personas desde axios...');
        resolve(response.data);
      });
    });
  }
  getPersonasFetch(): Promise<any> {
    return new Promise((resolve) => {
      var url = environment.urlApiPersonas;
      var request = 'api/personas';
      this._http.get(url + request).subscribe((response) => {
        console.log('Obteniendo personas desde fetch...');
        resolve(response);
      });
    });
  }
}
