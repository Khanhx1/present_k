import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
@Input() hName:string = "";
@Output() changeFlag = new EventEmitter();

a:number = 1;

increase() {
  let b = this.a++;
  this.changeFlag.emit(b);
}

}
