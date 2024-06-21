import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
@Input() hName:string = "";
@Input() negative:number = 0;
@Output() homeData = new EventEmitter<number>();


constructor(private dataService: DataService){}

a:number = 99;

transferData:string = "";

arrNumber = [1,2,3,4,5,6,7];

send() {
  // let b = this.a++;
  this.homeData.emit(this.a);
}

//thay doi khi @input thay doi
ngOnChanges(changes: SimpleChanges) {
  console.log(changes);
  console.log(changes['negative'].currentValue);
}

ngOnInit(): void {
  console.log("chay lan dau .");
  this.send();

  this.dataService.currentData.subscribe(data => this.transferData = data);
  
}

// chay moi khi bien thay doi
ngDoCheck(): void {
  console.log("side effect");
  
}

}
