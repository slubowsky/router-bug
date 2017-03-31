import { Component } from '@angular/core';
import { GrandchildSearchService } from '../shared/grandchild-search.service';

@Component({
    selector: 'app-grandchild-search',
    templateUrl: './grandchild-search.component.html',
    styleUrls: ['./grandchild-search.component.css']
})
export class GrandchildSearchComponent {
    constructor(private grandchildSearchService: GrandchildSearchService) {
        grandchildSearchService.doSomething();
    }
}
