import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { ProductItemDetailComponent } from './Components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [
{path:'',component:ProductListComponent},
{path:'add',component:AddProductComponent},
{path:'edit/:code',component:EditProductComponent},
{path:':code',component:ProductItemDetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
