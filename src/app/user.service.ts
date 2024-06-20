import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }

  obtenerDatos(){
    return this.httpclient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
