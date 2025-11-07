import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServicePersona {
  constructor(private _http: HttpClient) {}

  getPersonas(): Promise<any> {
    return new Promise((resolve) => {
      var url = environment.urlApiPersonas;
      var request = 'api/personas';
      this._http.get(url + request).subscribe((response) => {
        resolve(response);
      });
    });
  }
}
