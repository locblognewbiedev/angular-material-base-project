import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../../models/product.type';
import { BACKEND_API_ENDPOINT } from '../../eviroment/eviroment';
import { Observable } from 'rxjs';
import Category from '../../models/category.type';
import Brand from '../../models/brand.type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  createProduct(product: Product) {
    return this.http.post<Product>(BACKEND_API_ENDPOINT + 'products/', product);
  }

  getAllProduct():Observable<Product[]> {
    return this.http.get<Product[]>(BACKEND_API_ENDPOINT + 'products/');
  }

  getProductById(id:number):Observable<Product> {
    return this.http.get<Product>(BACKEND_API_ENDPOINT + 'products/' +id);
  }
  updateProduct(id: number, product: Partial<Product>) {
    return this.http.patch<Product>(BACKEND_API_ENDPOINT + 'products/' + id, product);
  }
  deleteProduct(id: number) {
    return this.http.delete(BACKEND_API_ENDPOINT + 'products/' + id);
  }
  getAllCategory():Observable<Category[]> {
    return this.http.get<Category[]>(BACKEND_API_ENDPOINT + 'categories/');
  }

  getAllBrand():Observable<Brand[]> {
    return this.http.get<Category[]>(BACKEND_API_ENDPOINT + 'brands/');
  }
}
