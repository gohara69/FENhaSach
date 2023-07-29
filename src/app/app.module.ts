import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ClientGenreComponent } from './client/client-genre/client-genre.component';
import { FooterComponent } from './footer/footer.component';
import { ClientCartComponent } from './client/client-cart/client-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientHomeComponent,
    HeaderComponent,
    ClientGenreComponent,
    FooterComponent,
    ClientCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
