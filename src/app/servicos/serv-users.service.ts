import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http'; 
import { Usuario } from '../components/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServUsersService {
  private urlAPI ="http://localhost:3000/usuario"; 

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get<Usuario[]>(this.urlAPI); 
  }

  getUsuario(id : number){
    return this.http.get<Usuario>(`${this.urlAPI}/${id}`); 
  }

  postUsuario(usuario : Usuario){
    return this.http.post<Usuario>(this.urlAPI, usuario); 
  }

  putUsuario(usuario : Usuario, id : number){
    console.log({id:`${this.urlAPI}/${id}`, usuario});
    return this.http.put<Usuario>(`${this.urlAPI}/${id}`, usuario);    
  }
}
