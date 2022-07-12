import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';
import { ContactComponent } from './contact/contact.component';
import { HangarStatusComponent } from './hangar-status/hangar-status.component';
import { EditHangarComponent } from './hangar/edit-hangar/edit-hangar.component';
import { HangarComponent } from './hangar/hangar.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { EditpilotComponent } from './pilot/editpilot/editpilot.component';
import { PilotComponent } from './pilot/pilot.component';
import { EditplaneComponent } from './plane/editplane/editplane.component';
import { PlaneComponent } from './plane/plane.component';
import { ProfileComponent } from './profile/profile.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { ViewManagersComponent } from './view-managers/view-managers.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegFormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'admin/addPlane', component: PlaneComponent, children: [
      { path: ':editplane', component: EditplaneComponent }
    ]
  },
  {
    path: 'admin/addPilot', component: PilotComponent, children: [
      { path: ':editpilot', component: EditpilotComponent }
    ]
  },
  {
    path: 'admin/addHangar', component: HangarComponent, children: [
      { path: ':edit', component: EditHangarComponent }
    ]
  },
  { path: 'admin/viewManagers', component: ViewManagersComponent },
  { path: 'hangarStatus', component: HangarStatusComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
