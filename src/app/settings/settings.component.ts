import { Component, OnInit, Output, Injector } from '@angular/core';
import { DataService } from '../data.service';
import { BaseComponent } from '../base/BaseComponent';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent extends BaseComponent {

  nameList : string[]

  constructor(injector : Injector, private dataService: DataService) {
    super(injector)
  }

  ngOnInit() {

    console.log('SettingsComponent ngOnInit')

    this.nameList = [
      '1 from SettingsComponent ngOnInit'
    ]

  }

  childMethod() {

    console.log('childMethod')
    
    this.nameList = [
      '1 from SettingsComponent childMethod'
    ]

    this.dataService.nameList.next(this.nameList);
  }

}
