import { Component, OnInit, Input, Injector } from '@angular/core';
import { DataService } from '../data.service';
import { BaseComponent } from '../base/BaseComponent';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent {

  nameList: string[]

  name = "A_L_M"
  inputName = "";

  constructor(injector: Injector, private dataService: DataService) {
    super(injector)
  }

  ngOnInit() {

    console.log('DashboardComponent ngOnInit')

    this.nameList = [
      '1 from DashboardComponent ngOnInit'
    ]

    this.dataService.nameList.next(this.nameList)

    this.dataService.nameList.subscribe((data) => {
      this.parentMethod(data)
    })

  }

  parentMethod(data: string[]) {
    console.log('parentMethod')
    this.nameList = data
  }

  nameArray() {
    return this.name.split('')
  }

  onSubmit() {
    this.inputName = "";
    this.nameArray().forEach((value, i) => {
      let inputElem : HTMLInputElement = document.getElementById('name-' + i) as HTMLInputElement
      this.inputName += inputElem.value
    })
    console.log(this.inputName)
  }

  onKeyup(event, index) {

    var input = event.target.value;

    if (input.length > 0) {

      let nextElem = false;
      this.nameArray().forEach((value, i) => {
        if (i > index && value == "_") {
          nextElem = true
          document.getElementById('name-' + i).focus()
          return
        }
      })

      if(!nextElem) {
        this.onSubmit()
        event.target.blur()
      }
    }

  }

}
