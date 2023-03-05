import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable } from 'rxjs';
import { ProductService } from './../../Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],

})
export class ProductListComponent implements OnInit {
  products!:any[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // products$: Observable<any[]>;
  page = 0;
  size = 10;
  length = 0;

  constructor(private productService:ProductService    ) {

  }

  ngOnInit(): void {
    this.productService.getAllproducts().subscribe(prds => {
      this.products=prds;
    })
  }



  getProducts(): void {
    this.productService.getproductsByPage(this.page,this.size).subscribe( data =>{
      this.products=data;
      this.length=data.length;

    })
  }

  onPageChange(event: PageEvent): void {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.getProducts();
  }
}
