import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyComponent {
  constructor() { }
}
