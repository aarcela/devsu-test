import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent  implements OnInit{


  productInitialData = {};
  message = '';

  constructor(private producService: ProductService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: any) => {
      this.productInitialData = param?.params
    })
  }

  onSubmit(values: any){

    this.producService.editProduct(values).subscribe(
      data => this.message = 'Producto editado correctamente',
      err => {
        this.message = 'Error editando producto'
        setTimeout(() => {
          this.message = ''
        }, 5000);
})
  }
}

