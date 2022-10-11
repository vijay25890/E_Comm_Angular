import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.modue';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HeaderComponent, SellerAuthComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
