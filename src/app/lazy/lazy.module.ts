import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GrandchildSearchService } from './shared/grandchild-search.service';
import { GrandchildService } from './shared/grandchild.service';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  imports: [CommonModule,
    RouterModule,
    LazyRoutingModule],
  declarations: [LazyComponent],
  providers: [
    GrandchildSearchService,
    GrandchildService
  ]
})
export class LazyModule { }
