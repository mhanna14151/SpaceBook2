import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()

export class CBService {
  constructor(private http: Http) {}
  baseURL = environment.baseUrl;
  api = {
    'createCB'   : this.createCB,
    'findCBbyId' : this.findCBbyId,
    'findCBbyText': this.findCBbyText,
    'updateCB' : this.updateCB,
    'deleteCB' : this.deleteCB
  };

  createCB(cb: any) {
    const url = this.baseURL + '/api/cb';
    return this.http.post(url, cb)
      .map((response: Response) => {
        return response.json();
      });
  }

  findCBbyId(cbId: String) {
    const url = this.baseURL + '/api/cb/' + cbId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  findCBbyText(text: String) {
    const url = this.baseURL + '/api/cb?text=' + text;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateCB(cbId: String, cb: any) {
    const url = this.baseURL + '/api/cb/' + cbId;
    return this.http.put(url, cb)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteCB(cbId: String) {
    const url = this.baseURL + '/api/cb/' + cbId;
    return this.http.delete(url);
  }
}
