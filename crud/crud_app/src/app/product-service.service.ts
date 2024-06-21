import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IProduct {
  name: string,
  description: string
}

export interface IProductFull {
  id:number,
  name: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private h: HttpClient) { }

  getAllProducts() {
    return this.h.get("http://localhost:8081/products");
  }

  saveProduct(p: IProduct){
    return this.h.post("http://localhost:8081/products", p);
  }

  getById(id: number){
    return this.h.get(`http://localhost:8081/products/${id}`);
  }

  updateProduct(p: IProduct, id: number) {
    return this.h.put(`http://localhost:8081/products/${id}`, p);
  }
}
