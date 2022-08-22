import { Component, OnInit ,Input } from '@angular/core';
import { WishlistService } from 'src/app/servicos/wishlist.service';

@Component({
  selector: 'app-wishlist-star',
  templateUrl: './wishlist-star.component.html',
  styleUrls: ['./wishlist-star.component.css']
})

export class WishlistStarComponent implements OnInit {

  @Input() item : number = 0;

  star: boolean = false;

  constructor(private wishlistService : WishlistService) { }

  ngOnInit(): void {
  }

  addToWishlist(){
    this.wishlistService.addWhishlist(this.item);
    this.star = true;
  }
}
