import { Injectable } from '@angular/core';
import { Artigo } from '../components/models/artigo.model';

@Injectable({
  providedIn: 'root'
})
export class EdtitProductService {

  product!: Artigo;

  constructor() { }

  getArtigo(){
    return this.product;
  }

  setArtigo(product : Artigo){
    this.product = product;
  }
}
