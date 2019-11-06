import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserRetireveComponent } from './user-retireve/user-retireve.component';
import { UserStoreComponent } from './user-store/user-store.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    LoginComponent,
    UserRetireveComponent,
    UserStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
