import { Component } from '@angular/core';
import { IProductFull, ProductServiceService } from '../product-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
constructor(private serviceP: ProductServiceService){}

products: IProductFull[] = [];

ngOnInit(): void {
  this.serviceP.getAllProducts().subscribe(data => {
    this.products = data as IProductFull[];
    console.log(this.products);
    
  })
}
}
