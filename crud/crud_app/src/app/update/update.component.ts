

import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'
import { IProduct, ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  toast1(timerProgressBar: boolean = false) {
    Swal.fire({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      icon: 'success',
      timerProgressBar,
      timer: 5000,
      title: 'Update successfully'
    })
  }

  product: IProduct = {name: "", description: ""};
  kform!: FormGroup;

  formSubmitted = false;
  constructor(private sp: ProductServiceService, private routek: Router, private routerAc: ActivatedRoute) { }

idUrl:number = -1;

  ngOnInit(): void {

    let id: any;
    this.routerAc.paramMap.subscribe(params => {
      id = params.get('id');
      this.idUrl = id;
      console.log(`id la ${this.idUrl}`);
      console.log(id); //get path variable /id from url
    });

    this.sp.getById(id).subscribe(data => {
      //casting type value -- important
      this.product = data as IProduct

      console.log(this.product);

      this.kform = new FormGroup({
        name: new FormControl(this.product.name, [Validators.required, Validators.pattern("^P[0-9]{1,4}$")]),
        description: new FormControl(this.product.description, [Validators.required, Validators.maxLength(100)])
      });
    });
  }


  onSubmit():void {
    this.formSubmitted = true;
    if(this.kform.valid){
      console.log("ok");
      console.log(this.kform.value);
    this.sp.updateProduct(this.kform.value, this.idUrl).subscribe(data => {
      this.toast1();
      this.routek.navigate(['/']);
    })
      
    } else {
      console.log("invalid!!!");
    }

   
  
    
  }
}
