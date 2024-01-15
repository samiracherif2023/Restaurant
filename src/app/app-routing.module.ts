import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { PlatsComponent } from './components/plats/plats.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChefInfoComponent } from './components/chef-info/chef-info.component';
import { PlatInfoComponent } from './components/plat-info/plat-info.component';
import { EditChefComponent } from './components/edit-chef/edit-chef.component';
import { EditPlatComponent } from './components/edit-plat/edit-plat.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "addPlat", component: AddPlatComponent },
  { path: "addChef", component: AddChefComponent },
  { path: "plats", component: PlatsComponent },
  { path: "chefs", component: ChefsComponent },
  { path: "admin", component: AdminComponent },
  {path: "chefInfo", component: ChefInfoComponent},
  {path: "platInfo" , component: PlatInfoComponent},
  {path: "editChef/:x" , component:EditChefComponent},
  {path: "editPlat/:x" , component:EditPlatComponent},
  {path: "editProfile/:x" , component:EditProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
