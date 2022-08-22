import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/pages/principal/principal.component';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';    
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule } from '@angular/forms';  
import { FormsModule } from '@angular/forms';
import { RegistoComponent } from './components/usuarios/registo/registo.component';
import { PerfilComponent } from './components/usuarios/perfil/perfil.component';
import { WishlistsComponent } from './components/pages/wishlists/wishlists.component';
import { AdminComponent } from './components/usuarios/admin/admin.component';
import { WishlistStarComponent } from './components/wishlist-star/wishlist-star.component';
import { FiltroPageProdutosComponent } from './components/filtro-page-produtos/filtro-page-produtos.component';
import { FilterProductPipe } from './components/usuarios/admin/shared/filter-product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    ProdutosComponent,
    RegistoComponent,
    PerfilComponent,
    WishlistsComponent,
    AdminComponent,
    WishlistStarComponent,
    FiltroPageProdutosComponent,
    FilterProductPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
