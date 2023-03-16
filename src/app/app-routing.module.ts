import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [
      MsalGuard
    ]
  },
  {
    // Needed for hash routing
    path: 'code',
    component: HomeComponent,
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [
      MsalGuard
    ]
  },
  {
    // Needed for Error routing
    path: 'error',
    component: HomeComponent
  }
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    // Don't perform initial navigation in iframes
    
    initialNavigation: !isIframe ? 'enabledBlocking' : 'disabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
