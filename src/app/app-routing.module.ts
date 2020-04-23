import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule), 
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule), 
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule), 
    canActivate: [AuthGuard]
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./pages/geolocation/geolocation.module').then( m => m.GeolocationPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'disarm',
    loadChildren: () => import('./pages/disarm/disarm.module').then( m => m.DisarmPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'fuel',
    loadChildren: () => import('./pages/fuel/fuel.module').then( m => m.FuelPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'device',
    loadChildren: () => import('./pages/device/device.module').then( m => m.DevicePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./pages/forgetpassword/forgetpassword.module').then( m => m.ForgetpasswordPageModule)
  },
  {
    path: 'pagenotfound',
    loadChildren: () => import('./pages/pagenotfound/pagenotfound.module').then( m => m.PagenotfoundPageModule)
  },
  {
    path: 'pending',
    loadChildren: () => import('./pages/pending/pending.module').then( m => m.PendingPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pending-help',
    loadChildren: () => import('./pages/pending-help/pending-help.module').then( m => m.PendingHelpPageModule), 
  },
  {
    path: 'choose-language',
    loadChildren: () => import('./pages/choose-language/choose-language.module').then( m => m.ChooseLanguagePageModule)
  },
  {
    path: 'engine',
    loadChildren: () => import('./pages/engine/engine.module').then( m => m.EnginePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-balance',
    loadChildren: () => import('./pages/my-balance/my-balance.module').then( m => m.MyBalancePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-group',
    loadChildren: () => import('./pages/manage-group/manage-group.module').then( m => m.ManageGroupPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-icon',
    loadChildren: () => import('./pages/manage-icon/manage-icon.module').then( m => m.ManageIconPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'speed',
    loadChildren: () => import('./pages/speed/speed.module').then( m => m.SpeedPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'oil-maintenance',
    loadChildren: () => import('./pages/oil-maintenance/oil-maintenance.module').then( m => m.OilMaintenancePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'parking-alarm',
    loadChildren: () => import('./pages/parking-alarm/parking-alarm.module').then( m => m.ParkingAlarmPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'trip',
    loadChildren: () => import('./pages/trip/trip.module').then( m => m.TripPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'trip-detail',
    loadChildren: () => import('./pages/trip-detail/trip-detail.module').then( m => m.TripDetailPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tire-maintenance',
    loadChildren: () => import('./pages/tire-maintenance/tire-maintenance.module').then( m => m.TireMaintenancePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'summary',
    loadChildren: () => import('./pages/summary/summary.module').then( m => m.SummaryPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'select-device',
    loadChildren: () => import('./pages/select-device/select-device.module').then( m => m.SelectDevicePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-group-assign-item',
    loadChildren: () => import('./pages/manage-group-assign-item/manage-group-assign-item.module').then( m => m.ManageGroupAssignItemPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-group-single/:id/:name',
    loadChildren: () => import('./pages/manage-group-single/manage-group-single.module').then( m => m.ManageGroupSinglePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'street-view',
    loadChildren: () => import('./pages/street-view/street-view.module').then( m => m.StreetViewPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'geofence',
    loadChildren: () => import('./pages/geofence/geofence.module').then( m => m.GeofencePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'polygonfence',
    loadChildren: () => import('./pages/polygonfence/polygonfence.module').then( m => m.PolygonfencePageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
