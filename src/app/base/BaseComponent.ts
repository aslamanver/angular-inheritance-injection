import { OnInit, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MyService } from './MyService'

export class BaseComponent implements OnInit {

    protected myService: MyService

    constructor(injector: Injector) {
        this.myService = injector.get(MyService)
    }

    ngOnInit() {
        console.log('ngOnInit from Base');
    }
}