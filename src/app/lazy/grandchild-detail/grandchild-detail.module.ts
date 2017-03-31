import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GrandchildDetailComponent } from './grandchild-detail.component';
import { GrandchildDetailRoutingModule } from './grandchild-detail-routing.module';

@NgModule({
  imports: [CommonModule,
    RouterModule,
    GrandchildDetailRoutingModule],
  declarations: [GrandchildDetailComponent,
    GrandchildDetailComponent]
})
export class GrandchildDetailModule { }
