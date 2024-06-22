import { Component } from '@angular/core';
import { IProductFull, ProductServiceService } from '../product-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private serviceP: ProductServiceService) { }

  products: IProductFull[] = [];

  ngOnInit(): void {
    this.serviceP.getAllProducts().subscribe(data => {
      this.products = data as IProductFull[];
      console.log(this.products);

    });
  }

  deleteModal(name: string, id: number) {
    Swal.fire({
      title: `Are you sure want to delete product ${name} ?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceP.deleteProduct(id).subscribe(data => {
          console.log("deleted");
          this.serviceP.getAllProducts().subscribe(data => {
            this.products = data as IProductFull[];
            console.log(this.products);
      
          });
        });

      

        Swal.fire({
          title: "Deleted!",
          text: `Product ${name} has been deleted.`,
          icon: "success"
        });
      }
    });
  }
}
