import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'signal-decorators/42', pathMatch: 'full'},
  {path: 'signal-decorators/:id', loadComponent: () => import('./signal-decorators/signal-decorators.component')},
  {path: 'signal-effect', loadComponent: () => import('./signal-effect/signal-effect.component')},
];
