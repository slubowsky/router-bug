import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GrandchildSearchComponent } from './grandchild-search.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: GrandchildSearchComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class GrandchildSearchRoutingModule { }


