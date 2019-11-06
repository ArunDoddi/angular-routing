import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserStoreComponent } from './user-store/user-store.component';
import { UserRetireveComponent } from './user-retireve/user-retireve.component';


const routes: Routes = [{path:"aboutus",component:AboutUsComponent},
  {path:"login",component:LoginComponent},
  {path:"home", component:HomeComponent,children:[{path:"store", component:UserStoreComponent},
  {path:"retrieve", component:UserRetireveComponent}]},
  {path:"contactus",component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
