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
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'today',
    loadChildren: () => import('./pages/today/today.module').then( m => m.TodayPageModule)
  },
  {
    path: 'our-list',
    loadChildren: () => import('./pages/our-list/our-list.module').then( m => m.OurListPageModule)
  },
  {
    path: 'log',
    loadChildren: () => import('./pages/log/log.module').then( m => m.LogPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'your-info',
    loadChildren: () => import('./pages/your-info/your-info.module').then( m => m.YourInfoPageModule)
  },
  {
    path: 'pairing',
    loadChildren: () => import('./pages/pairing/pairing.module').then( m => m.PairingPageModule)
  },
  {
    path: 'premiun',
    loadChildren: () => import('./pages/premiun/premiun.module').then( m => m.PremiunPageModule)
  },
  {
    path: 'terms-of-service',
    loadChildren: () => import('./pages/terms-of-service/terms-of-service.module').then( m => m.TermsOfServicePageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'delete-account',
    loadChildren: () => import('./pages/delete-account/delete-account.module').then( m => m.DeleteAccountPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'bloom',
    loadChildren: () => import('./pages/bloom/bloom.module').then( m => m.BloomPageModule)
  },
  {
    path: 'future',
    loadChildren: () => import('./pages/future/future.module').then( m => m.FuturePageModule)
  },
  {
    path: 'reflection',
    loadChildren: () => import('./pages/reflection/reflection.module').then( m => m.ReflectionPageModule)
  },
  {
    path: 'root',
    loadChildren: () => import('./pages/root/root.module').then( m => m.RootPageModule)
  },
  {
    path: 'our-list-complete',
    loadChildren: () => import('./pages/our-list-complete/our-list-complete.module').then( m => m.OurListCompletePageModule)
  },
  {
    path: 'our-list-add',
    loadChildren: () => import('./pages/our-list-add/our-list-add.module').then( m => m.OurListAddPageModule)
  },
  {
    path: 'our-list-task',
    loadChildren: () => import('./pages/our-list-task/our-list-task.module').then( m => m.OurListTaskPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'un-pair',
    loadChildren: () => import('./pages/un-pair/un-pair.module').then( m => m.UnPairPageModule)
  },
  {
    path: 'administration',
    loadChildren: () => import('./pages/administration/administration.module').then( m => m.AdministrationPageModule)
  },
  {
    path: 'administration-task',
    loadChildren: () => import('./pages/administration-task/administration-task.module').then( m => m.AdministrationTaskPageModule)
  },
  {
    path: 'administration-task-add',
    loadChildren: () => import('./pages/administration-task-add/administration-task-add.module').then( m => m.AdministrationTaskAddPageModule)
  },
  {
    path: 'administration-users',
    loadChildren: () => import('./pages/administration-users/administration-users.module').then( m => m.AdministrationUsersPageModule)
  },
  {
    path: 'administration-users-edit',
    loadChildren: () => import('./pages/administration-users-edit/administration-users-edit.module').then( m => m.AdministrationUsersEditPageModule)
  },
  {
    path: 'administration-task-edit',
    loadChildren: () => import('./pages/administration-task-edit/administration-task-edit.module').then( m => m.AdministrationTaskEditPageModule)
  },
  {
    path: 'administration-users-add',
    loadChildren: () => import('./pages/administration-users-add/administration-users-add.module').then( m => m.AdministrationUsersAddPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found404/not-found404.module').then( m => m.NotFound404PageModule)
  },


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
