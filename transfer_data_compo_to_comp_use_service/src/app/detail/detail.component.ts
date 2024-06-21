import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  id:number= 0; //id loại sản phẩm
  constructor(private route: ActivatedRoute) {}

  
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
}
