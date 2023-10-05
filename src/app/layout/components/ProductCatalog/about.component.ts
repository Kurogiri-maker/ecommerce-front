import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProductListingService } from 'src/app/services/product-listing.service';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
export interface Product {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  category!:string;
  subcategory!:string;
  subdivision!:string;

  constructor( private router: ActivatedRoute,private service: ProductListingService){

  }

  displayedColumns: string[] = ['name', 'description', 'imageUrl', 'price', 'button'];

  dataSource = [];


  currentPage = 0;
  totalElements = 0;
  pageSize = 5;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.currentPage=0;
    this.pageSize=10;
    this.router.data.subscribe( data => {
      this.category=data['category'];
      this.subcategory=data['subcategory'];

    });
  
    if(this.category != null){
      if(this.subcategory != null){
        if(this.subdivision != null){
          this.getProductsBySubCategoryAndSubDivision(this.currentPage,this.pageSize);
        }else{
          this.getProductsBySubCategory(this.currentPage,this.pageSize);
        }
      }
      else{
        this.getProducts(this.currentPage,this.pageSize);
      }
    }

   
    
  }

  getProducts(page: number, pageSize: number){
    this.service.getPaginatedProducts(this.category,page,pageSize).subscribe(
      {
        next: ((val: any) => {
          this.dataSource = val.content;
          console.log(this.dataSource)
          this.totalElements = val.totalElements;

        }),
        error: ((err: Error) => { console.log(err)}),
        complete: (() => {})
      }
    );
  }

  getProductsBySubCategory(page: number, pageSize: number){
    this.service.getPaginatedProductsBySubCategory(this.category,this.subcategory,page,pageSize).subscribe(
      {
        next: ((val: any) => {
          this.dataSource = val.content;
          console.log(this.dataSource)

          this.totalElements = val.totalElements;

        }),
        error: ((err: Error) => { console.log(err)}),
        complete: (() => {})
      }
    );
  }

  getProductsBySubCategoryAndSubDivision(page: number, pageSize: number){
    this.service.getPaginatedProductsBySubCategoryAndSubdivision(this.category,this.subcategory,this.subdivision,page,pageSize).subscribe(
      {
        next: ((val: any) => {
          this.dataSource = val.content;
          this.totalElements = val.totalElements;

        }),
        error: ((err: Error) => { console.log(err)}),
        complete: (() => {})
      }
    );
  }

  getProductById(){
    this.service.getProductById(this.category).subscribe({
      next: ((val: any) => {
       console.log(val);

      }),
      error: ((err: Error) => { console.log(err)}),
      complete: (() => {})
    }
    );
  }

  paginate(event:any){
    console.log(event);
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getProducts(this.currentPage,this.pageSize);
  }
}
