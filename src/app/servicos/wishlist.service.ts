import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public wishlistItemList: any = [];
  public produtoList = new BehaviorSubject<any>([]);

  constructor() { }

  getProdutos(){
    return this.produtoList.asObservable();
  }

  setProdutos(produtos : any){
    this.wishlistItemList.push(...produtos);
    this.produtoList.next(produtos);
  }

  addWhishlist(produtos : any){
    this.wishlistItemList.push(produtos);
    this.produtoList.next(this.wishlistItemList);
    console.log(this.wishlistItemList);
  }

  removerItem(produtos : any){
    this.wishlistItemList.map((a:any, index:any)=>{
      if(produtos.id === a.id){
        this.wishlistItemList.splice(index, 1);
      }
    })
  }
}

