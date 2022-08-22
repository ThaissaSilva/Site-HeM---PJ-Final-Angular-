import { Injectable } from '@angular/core';
import { Usuario } from '../components/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServUserLogadoService {

  user!: Usuario;

  constructor() { }

  getUser(){
    return this.user;
  }

  setUser(user : Usuario){
    this.user = user;
  }
}
