import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FormsModule } from '@angular/forms';
import { HangarStatusComponent } from './hangar-status/hangar-status.component';
import { ViewManagersComponent } from './view-managers/view-managers.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { HangarComponent } from './hangar/hangar.component';
import { PilotComponent } from './pilot/pilot.component';
import { PlaneComponent } from './plane/plane.component';
import { EditHangarComponent } from './hangar/edit-hangar/edit-hangar.component';
import { EditplaneComponent } from './plane/editplane/editplane.component';
import { EditpilotComponent } from './pilot/editpilot/editpilot.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ProfilepictureComponent } from './profilepicture/profilepicture.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ManagerComponent,
    RegFormComponent,
    LoginComponent,
    NavbarComponent,
    BannerComponent,
    PlaneComponent,
    PilotComponent,
    HangarComponent,
    HangarStatusComponent,
    ViewManagersComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    EditHangarComponent,
    EditplaneComponent,
    EditpilotComponent,
    ProfileComponent,
    UploadFileComponent,
    ProfilepictureComponent
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
