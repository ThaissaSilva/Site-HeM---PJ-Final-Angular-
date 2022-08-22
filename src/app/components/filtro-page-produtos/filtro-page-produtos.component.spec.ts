import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPageProdutosComponent } from './filtro-page-produtos.component';

describe('FiltroPageProdutosComponent', () => {
  let component: FiltroPageProdutosComponent;
  let fixture: ComponentFixture<FiltroPageProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroPageProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroPageProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
