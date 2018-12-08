import { Clientes } from './shared/clientes.model';

import { Http, RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { URL_API } from './app.api';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class clientesService {


  constructor(private http: Http) {}


  public getClientes(): Promise<Clientes[]> {

    return this.http.get(`${URL_API}clientes`)
            .toPromise()
            .then((response: any) => response.json())
  }
  public deleteCliente(id: number): Observable<any> {

      return this.http.delete(`${URL_API}clientes`+ '/' + id);
  }

  public salvarCliente(cliente: Clientes): Observable<any> {

    let headers: Headers = new Headers()
    headers.append('Content-type','application/json')

    return this.http.post(
      `${URL_API}clientes`,
      JSON.stringify(cliente),
      new RequestOptions({ headers:headers })
    )
    .pipe(
      map(response => console.log(response.json()))
    );
  }
}
