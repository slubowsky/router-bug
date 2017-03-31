import { Component } from '@angular/core';
import { GrandchildService } from '../shared/grandchild.service';

@Component({
    selector: 'app-grandchild-detail',
    templateUrl: './grandchild-detail.component.html',
    styleUrls: ['./grandchild-detail.component.css']
})
export class GrandchildDetailComponent {
    constructor(
        private grandchildService: GrandchildService,
    ) {
        grandchildService.doSomething();
    }
}
