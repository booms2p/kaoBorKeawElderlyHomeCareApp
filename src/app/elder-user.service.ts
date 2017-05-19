import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import {Jsonp} from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';

@Injectable()
export class ElderUserService {

  private _headers = new Headers ({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Method':'GET'
  });
  private elderApiUrl = 'http://localhost:3001/';  // URL to web api
  public elderUser = [];

  private headers = new Headers({ 'Access-Control-Allow-Origin': '*','Content-Type': 'application/json','Method':'GET' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private _jsonp: Jsonp, private _http: Http) { }

  

  getElderAllUser() {
    return this._http.get(this.elderApiUrl + 'get-elder-user')
               .map( (response) => response.json() );
  };

  deleteUserByIDNumber(idNumber) {
    return this._http.delete(this.elderApiUrl + 'elderUser/' + idNumber)
               .map( (response) => response.json() );
  }
  

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  };

}

