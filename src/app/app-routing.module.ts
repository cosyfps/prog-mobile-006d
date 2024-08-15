import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'today',
    loadChildren: () => import('./page/today/today.module').then( m => m.TodayPageModule)
  },
  {
    path: 'our-list',
    loadChildren: () => import('./page/our-list/our-list.module').then( m => m.OurListPageModule)
  },
  {
    path: 'log',
    loadChildren: () => import('./page/log/log.module').then( m => m.LogPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./page/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./page/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'your-info',
    loadChildren: () => import('./page/your-info/your-info.module').then( m => m.YourInfoPageModule)
  },
  {
    path: 'pairing',
    loadChildren: () => import('./page/pairing/pairing.module').then( m => m.PairingPageModule)
  },
  {
    path: 'premiun',
    loadChildren: () => import('./page/premiun/premiun.module').then( m => m.PremiunPageModule)
  },
  {
    path: 'terms-of-service',
    loadChildren: () => import('./page/terms-of-service/terms-of-service.module').then( m => m.TermsOfServicePageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./page/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'delete-account',
    loadChildren: () => import('./page/delete-account/delete-account.module').then( m => m.DeleteAccountPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./page/logout/logout.module').then( m => m.LogoutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
