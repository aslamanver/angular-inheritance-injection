import { Component, Injector } from '@angular/core';
import { BaseComponent } from './base/BaseComponent'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {

  title = 'injector';

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    super.ngOnInit()
    // this.myService.getUsers()
  }

}
