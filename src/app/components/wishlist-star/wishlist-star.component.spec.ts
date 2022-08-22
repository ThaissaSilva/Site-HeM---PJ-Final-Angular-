import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistStarComponent } from './wishlist-star.component';

describe('WishlistStarComponent', () => {
  let component: WishlistStarComponent;
  let fixture: ComponentFixture<WishlistStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistStarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
