import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [{
  path: 'add',
  component: AddProductComponent
},
{
  path: '',
  component: HomeComponent
},
{
  path: 'edit',
  component: EditProductComponent
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
