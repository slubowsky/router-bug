import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrandchildSearchComponent } from './grandchild-search.component';
import { GrandchildSearchRoutingModule } from './grandchild-search-routing.module';

@NgModule({
  imports: [CommonModule,
    GrandchildSearchRoutingModule],
  declarations: [GrandchildSearchComponent],
  exports: [GrandchildSearchComponent]
})
export class GrandchildSearchModule { }
