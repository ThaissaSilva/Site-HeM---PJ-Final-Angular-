import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/servicos/wishlist.service';

@Component({
  selector: 'app-wishlists',
  templateUrl: './wishlists.component.html',
  styleUrls: ['./wishlists.component.css']
})
export class WishlistsComponent implements OnInit {

  wishlistLista : any;
  public produtos : any = [];
  
  constructor(private wishlistService : WishlistService) { }

  ngOnInit(): void {
    this.wishlistService.getProdutos()
      .subscribe(res => {
        this.produtos = res;
      })
  }

  remover(item : any){
    this.wishlistService.removerItem(item);
  }
}
