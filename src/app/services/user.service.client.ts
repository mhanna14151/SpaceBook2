import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()

export class UserService {
  constructor(private http: Http) {}
  baseURL = environment.baseUrl;
  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findUserByCredentials' : this.findUserByCredentials,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser,
  };

  addFollower(userId, followedId) {
    const url = this.baseURL + '/api/user/' + userId;
    return this.http.put(url, followedId)
      .map((response: Response) => {
        return response.json();
      });
  }

  createUser(user: any) {
    const url = this.baseURL + '/api/user';
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId: String) {
    const url = this.baseURL + '/api/user/' + userId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByUsername(username: String) {
    console.log(username);
    const url = this.baseURL + '/api/user?username=' + username;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByCredentials(username: String, password: String) {
    console.log('IN USER SERVICE TS ', username, password);
    const url = this.baseURL + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateUser(userId: String, user: any) {
    const url = this.baseURL + '/api/user/' + userId;
    return this.http.put(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteUser(userId: String) {
    const url = this.baseURL + '/api/user/' + userId;
    return this.http.delete(url);
  }
}
