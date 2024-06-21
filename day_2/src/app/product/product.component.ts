import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent{

  constructor(private dataService: DataService) {}

  //Sibling to Sibling
  sendData() { 
   this.dataService.transferData("data from product");
  }

  ngOnInit(): void {
    this.sendData();
  }
}
