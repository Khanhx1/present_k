import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // tryen tu product sang home
  constructor() { }

  private dataS = new BehaviorSubject<string>('');
  currentData = this.dataS.asObservable();

  transferData(data:string) {
    this.dataS.next(data);
  }
}
