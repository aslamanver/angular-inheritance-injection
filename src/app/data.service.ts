import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  nameList : Subject<string[]> = new Subject<string[]>()

  constructor() { }
}
