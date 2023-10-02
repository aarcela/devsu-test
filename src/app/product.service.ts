import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  apiUrl: string = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorId': '437',
    }),
  };

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product>{
    return this.http.get<Product>(this.apiUrl, this.httpOptions)
  }

  addProduct(product_data: Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product_data ,this.httpOptions)
  }

  editProduct(product_data: Product): Observable<Product>{
    return this.http.put<Product>(this.apiUrl, product_data ,this.httpOptions)
  }

  deleteProduct(product_id: string): Observable<any>{
    return this.http.delete(`${this.apiUrl}?id=${product_id}`,this.httpOptions)
  }

}
