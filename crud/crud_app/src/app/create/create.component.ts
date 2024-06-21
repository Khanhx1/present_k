import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2'
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

 kform!: FormGroup;

 formSubmitted = false;
 
 showModal1() {
  Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'success',
    confirmButtonText: 'Cool'
  });
}

toast1(timerProgressBar: boolean = false) {
  Swal.fire({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    icon: 'success',
    timerProgressBar,
    timer: 5000,
    title: 'Add successfully'
  })
}

constructor(private sp: ProductServiceService, private routek: Router){}

ngOnInit(): void {
  this.kform = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.pattern("^P[0-9]{1,4}$")]),
    description: new FormControl('',[Validators.required, Validators.maxLength(100)])
  });
}


  

    // this.myForm = this.fb.group({
    //   name: ['', [Validators.required, Validators.pattern('^[P]{1}\w+$')]]
    // })


  onSubmit():void {
    this.formSubmitted = true;
    if(this.kform.valid){
      console.log("ok");
      console.log(this.kform.value);
    this.sp.saveProduct(this.kform.value).subscribe(data => {
      this.toast1();
      this.routek.navigate(['/']);
    })
      
    } else {
      console.log("invalid!!!");
    }

   
  
    
  }

  get name(){
    return this.kform.get('name');
  }

  get description(){
    return this.kform.get('description');
  }


}
