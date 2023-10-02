import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { noop } from 'rxjs';
import { Product } from '../product';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  selector: 'home-component'
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  searchText: string = '';
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes = [5, 10, 15];
  confirmProductDeleteFlag = false;
  confirmProductDeleteTitle = '';
  confirmProductDeleteId = '';


  constructor(private productService: ProductService) { }
  ngOnInit() {

    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data: any) => this.products = data)
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getProducts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getProducts();
  }

  changePagination(event: any) {
    this.tableSize = event.target.value
  }

  confirmProductDelete(product: Product) {
    this.confirmProductDeleteFlag = !this.confirmProductDeleteFlag
    this.confirmProductDeleteTitle = product.name
    this.confirmProductDeleteId = product.id

  }
  checkDeleteSelection(value: boolean) {

    if (value) {
      this.productService.deleteProduct(this.confirmProductDeleteId)
      .subscribe(
        () => this.confirmProductDeleteFlag = false,
        noop,
        () => this.getProducts()
      );
    }
    
    this.confirmProductDeleteFlag = false

  }
  changeTotalPagination(event: any) {
    this.tableSize = event.target.value
  }

}
