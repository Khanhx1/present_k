import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
    {path: "", component: ProductComponent, title: "product"},
    {path: "create", component: CreateComponent, title: "create"},
    {path: "update/:id", component: UpdateComponent, title: "update"},
    {path: "detail", component: DetailComponent, title: "detail"}
];
