import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/pages/principal/principal.component';
import { ProdutoComponent } from './components/pages/produto/produto.component';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { WishlistsComponent } from './components/pages/wishlists/wishlists.component';
import { AdminComponent } from './components/usuarios/admin/admin.component';
import { PerfilComponent } from './components/usuarios/perfil/perfil.component';
import { RegistoComponent } from './components/usuarios/registo/registo.component';


const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'produto/:id', component: ProdutoComponent},
  {path: 'registo', component: RegistoComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'wishlist', component: WishlistsComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
