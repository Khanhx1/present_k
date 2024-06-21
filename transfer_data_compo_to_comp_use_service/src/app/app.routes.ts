import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    // {path: '', component: HomeComponent, title: 'Home'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {path: 'detail/:id', component: DetailComponent, title: 'Detail'},
    {path: 'product', component: ProductComponent, title: 'Product'},
    {path: 'san-pham', redirectTo: '/product', pathMatch: 'full'},
    // {path: '**', component: NotFoundComponent, title: 'Error'},
    
];
