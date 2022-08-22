import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http'; 
import { Artigo } from '../components/models/artigo.model';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoArtigosService {

  private urlAPIArtigos = "http://localhost:3000/artigos";
  private urlAPITipoArtigos = "http://localhost:3000/tipos";

  public search = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>(this.urlAPIArtigos)
    .pipe(map((res : any) => {
      return res;
    }))
  }

  getProducts(){
    return this.http.get<any[]>(this.urlAPIArtigos); 
  }

  getPostsPage(initialRecord : number, numberRecords : number) {
    return this.http.get<any[]>(`${this.urlAPIArtigos}?_start=${initialRecord}&_limit=${numberRecords}`, { observe: 'response' });
  }

  getProductID(id : number){
    return this.http.get<any>(`${this.urlAPIArtigos}/${id}`);
  }

  postProduct(artigo : Artigo){
    return this.http.post<Artigo>(this.urlAPIArtigos, artigo); 
  }

  getTypePoducts(){
    return this.http.get<any>(this.urlAPITipoArtigos)
    .pipe(map((res : any) => {
      return res;
    }));
  }

  deleteProduct(id : number){
    return this.http.delete<any>(`${this.urlAPIArtigos}/${id}`); 
  }

  putArtigo(product : any, id : number){
    console.log({id:`${this.urlAPIArtigos}/${id}`, product});
    return this.http.put<any>(`${this.urlAPIArtigos}/${id}`, product); 
  }
}
