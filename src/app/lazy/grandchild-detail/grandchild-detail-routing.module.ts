import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GrandchildDetailComponent } from './grandchild-detail.component';
import { CanDeactivateGuard } from '../../CanDeactivate';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: GrandchildDetailComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class GrandchildDetailRoutingModule { }


