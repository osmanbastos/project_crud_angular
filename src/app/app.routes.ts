import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    }, {
        path: "products",
        component: ProductCrudComponent
    }, {
        path: "products/create",
        component: ProductCrudComponent
    }, {
        path: "products/update/:id",
        component: ProductCrudComponent
    }, {
        path: "products/delete/:id",
        component: ProductCrudComponent
    }
];
