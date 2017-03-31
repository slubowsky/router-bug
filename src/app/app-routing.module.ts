import { RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { CanDeactivateGuard } from './CanDeactivate';
import { CanActivateGuard } from './can-activate-guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/app', pathMatch: 'full' },
      {
        path: 'app',
        children: [
          {
            path: 'lazy',
            loadChildren: './lazy/lazy.module#LazyModule',
            canActivate: [CanActivateGuard]
          }
        ]
      }
    ],
      { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanActivateGuard,
    CanDeactivateGuard
  ]
})
export class AppRoutingModule { }
