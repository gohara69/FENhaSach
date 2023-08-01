import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientGenreComponent } from './client/client-genre/client-genre.component';
import { FooterComponent } from './footer/footer.component';
import { ClientCartComponent } from './client/client-cart/client-cart.component';
import { ClientCheckoutComponent } from './client/client-checkout/client-checkout.component';
import { ClientSuccessComponent } from './client-success/client-success.component';
import { AdminComponent } from './admin/admin.component';
import { ReceiptComponent } from './admin/receipt/receipt.component';
import { AdminService } from './service/Admin.service';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientHomeComponent,
    HeaderComponent,
    ClientGenreComponent,
    FooterComponent,
    ClientCartComponent,
    ClientCheckoutComponent,
    ClientSuccessComponent,
    AdminComponent,
    ReceiptComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    SignupSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }