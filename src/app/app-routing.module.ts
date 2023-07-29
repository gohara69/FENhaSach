import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { ClientGenreComponent } from './client/client-genre/client-genre.component';
import { ClientCartComponent } from './client/client-cart/client-cart.component';

const routes: Routes = [
  { path: 'client-home', component: ClientHomeComponent},
  { path: 'client-genre/:id', component: ClientGenreComponent},
  { path: 'client-cart', component: ClientCartComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
