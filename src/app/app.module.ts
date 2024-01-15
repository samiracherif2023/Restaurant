import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { PlatsComponent } from './components/plats/plats.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HistoryComponent } from './components/history/history.component';
import { VideoComponent } from './components/video/video.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NewsComponent } from './components/news/news.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { PlatComponent } from './components/plat/plat.component';
import { ChefComponent } from './components/chef/chef.component';
import { AdminComponent } from './components/admin/admin.component';
import { TablePlatsComponent } from './components/table-plats/table-plats.component';
import { TableChefsComponent } from './components/table-chefs/table-chefs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { ChefInfoComponent } from './components/chef-info/chef-info.component';
import { PlatInfoComponent } from './components/plat-info/plat-info.component';
import { EditChefComponent } from './components/edit-chef/edit-chef.component';
import { EditPlatComponent } from './components/edit-plat/edit-plat.component';
import { HttpClientModule } from '@angular/common/http';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChefsComponent,
    PlatsComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    BannerComponent,
    HistoryComponent,
    VideoComponent,
    MenuComponent,
    ReservationComponent,
    TestimonialsComponent,
    NewsComponent,
    AddPlatComponent,
    AddChefComponent,
    PlatComponent,
    ChefComponent,
    AdminComponent,
    TablePlatsComponent,
    TableChefsComponent,
    TableUsersComponent,
    ChefInfoComponent,
    PlatInfoComponent,
    EditChefComponent,
    EditPlatComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
