import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule],
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

  total:number = 0;

  handleChangeQuantity(event:any) {
    let e:HTMLInputElement = event.target;
    let q = Number(e.value);
    this.total = q * this.price;
  }
}
