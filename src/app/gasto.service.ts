import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gasto } from './Gasto'; 

const configUrl= 'assets/datos.json';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http se encuentra funcionando...');
   }

   obtenerDatos(){
    return this.httpclient.get<Gasto[]>(configUrl);
   }
}
