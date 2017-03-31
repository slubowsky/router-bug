import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { CanActivateGuard } from '../can-activate-guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LazyComponent,
        canActivate: [CanActivateGuard],
        children: [
          {
            path: '',
            redirectTo: 'grandchild-search',
            pathMatch: 'full'
          },
          {
            path: 'grandchild-search',
            loadChildren: 'app/lazy/grandchild-search/grandchild-search.module#GrandchildSearchModule',
            canActivate: [CanActivateGuard]
          },
          {
            path: 'grandchild-detail',
            loadChildren: 'app/lazy/grandchild-detail/grandchild-detail.module#GrandchildDetailModule',
            canActivate: [CanActivateGuard]
          },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class LazyRoutingModule { }

