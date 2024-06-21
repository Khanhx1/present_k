import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule, FormsModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang1';


  name:string = "angular guide";



  so:number = 1;
  gender:string = "male";
  log:string = "jack";
  url:string = "https://img.lovepik.com/photo/48013/0576.jpg_wh860.jpg";
  price:number = 90000;


  receiveValue (t:number) {
    this.so = t;
  }

  
  username: string = '';
  total:number = 0;
  negative:number = 10;

  handleChangeQuantity(data:any) {
    // let e:HTMLInputElement = event.target;
    let q = Number(data);
    this.total = q * this.price;
  }

  decrease() {
    this.negative--;
  }
}
