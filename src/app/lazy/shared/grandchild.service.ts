import { Injectable } from '@angular/core';

@Injectable()
export class GrandchildService {
    constructor() { }

    public doSomething() {
        console.log('GrandchildService doing something');
    }
}
