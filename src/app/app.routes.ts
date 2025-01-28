import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'user-list', pathMatch: 'full' },
  {
    path: 'user-list',
    loadChildren: () => {
      return import('./pages/user-list/user-list.module').then(
        (m) => m.UserListModule
      );
    },
  },
];
