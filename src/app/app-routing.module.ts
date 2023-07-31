import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { ClientGenreComponent } from './client/client-genre/client-genre.component';
import { ClientCartComponent } from './client/client-cart/client-cart.component';
import { ClientCheckoutComponent } from './client/client-checkout/client-checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientSuccessComponent } from './client-success/client-success.component';

const routes: Routes = [
  { path: 'client-home', component: ClientHomeComponent},
  { path: 'client-genre/:id', component: ClientGenreComponent},
  { path: 'client-cart', component: ClientCartComponent},
  { path: 'client-checkout', component: ClientCheckoutComponent},
  { path: 'client-success', component: ClientSuccessComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
