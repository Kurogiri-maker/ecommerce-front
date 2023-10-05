import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductListingService {

  apiUrl = "http://localhost:8080"

  constructor( private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get(`${this.apiUrl}/products`);
  }

  getPaginatedProducts(category: string,currentPage: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/${category}?page=${currentPage}&size=${pageSize}`);
  }

  getPaginatedProductsBySubCategory(category: string, subcategory: string, currentPage: number, pageSize: number){
    return this.http.get(`${this.apiUrl}/products/${category}/${subcategory}?page=${currentPage}&size=${pageSize}`);
  }

  getPaginatedProductsBySubCategoryAndSubdivision(category: string, subcategory: string, subdivision: string, currentPage: number, pageSize: number){
    return this.http.get(`${this.apiUrl}/products/${category}/${subcategory}/${subdivision}?page=${currentPage}&size=${pageSize}`);
  }

  getProductById(category: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/products/${category}/2`);
  }

  addProductToCart(product: any, cartId: number): Observable<any>{
    return this.http.post(`${this.apiUrl}/cart/save/${cartId}`, product);
  }

  getCart(cartId: number): Observable<any>{
    return this.http.get(`${this.apiUrl}/cart/get/${cartId}`);
  }


}
