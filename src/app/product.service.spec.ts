import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { Product } from './product';

describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get products', () => {
    const expectedProducts: Product[] = [
      {
        id: '123',
        name: 'Product 1',
        logo: "logo",
        description: '01234567890',
        date_release: "02/01/2024",
        date_revision: "01/01/2025"
      },
      {
        id: '321',
        name: 'Product 2',
        logo: "logo",
        description: '01234567890',
        date_release: "02/01/2024",
        date_revision: "01/01/2025"
      }
    ];

    service.getProducts().subscribe(products => {
      expect(products).toBeTruthy();
    });

    const req = httpTestingController.expectOne('https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedProducts);
  });

  it('should add a product', () => {
    const newProduct = {
      id: '1233',
      name: 'Product 1',
      logo: "logo",
      description: '01234567890',
      date_release: "02/01/2024",
      date_revision: "01/01/2025"
    };

    const expectedProduct = {
      id: '1233',
      name: 'Product 1',
      logo: "logo",
      description: '01234567890',
      date_release: "02/01/2024",
      date_revision: "01/01/2025"
    };

    service.addProduct(newProduct).subscribe(product => {
      expect(product).toEqual(expectedProduct);
    });

    const req = httpTestingController.expectOne('https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products')
    expect(req.request.method).toEqual('POST');
    req.flush(expectedProduct);
  })

  it('should edit a Product', () => {

    const editProduct = {
      id: '1233',
      name: 'Product 1 Editado',
      logo: "logo",
      description: '01234567890',
      date_release: "02/01/2024",
      date_revision: "01/01/2025"
    };

    service.editProduct(editProduct).subscribe(product => {
      expect(product).toBeTruthy();
    });

    const req = httpTestingController.expectOne('https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products')
    expect(req.request.method).toEqual('PUT');
    req.flush(editProduct);
  })

  it('should delete a Product', () => {

    const deleteProduct = {
      id: '1233',
      name: 'Product 1 Delited',
      logo: "logo",
      description: '01234567890',
      date_release: "02/01/2024",
      date_revision: "01/01/2025"
    };

    service.deleteProduct('1233').subscribe(product => {
      expect(product).toBeTruthy();
    });

    const req = httpTestingController.expectOne('https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products?id=1233')
    expect(req.request.method).toEqual('DELETE');
    req.flush(deleteProduct);
  })

})