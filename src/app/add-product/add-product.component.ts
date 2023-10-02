import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {


  message: string = '';

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {

  }


  onSubmit(values: any) {
    this.productService.addProduct(values).subscribe(
      () => this.message = 'Producto creado satisfactoriamente',
      (err) => this.message = 'Error creando el producto, inténtelo de nuevo',
      () =>{
        setTimeout(() => {
          this.message = ''
        }, 3000);
      }
    )

  }

}
