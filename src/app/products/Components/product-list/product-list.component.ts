import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { ProductService } from './../../Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],

})
export class ProductListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  paginationForm!: FormGroup;
  pageSize: number=8;
  totalElements!: number;
  pageIndex:number=1;
  products!: any[];
  constructor(private productService:ProductService,
              private fb:FormBuilder) {

  }

  ngOnInit(): void {
    // this.productService.getAllproducts().subscribe(prds => {
    //   this.products=prds;
    // })

    this.getProducts();
  }

  getProducts() {

    this.productService.getproductsByPage(this.pageIndex, this.pageSize).subscribe(data => {
      this.products = data.content;
      this.totalElements = data.totalElements;
      this.pageSize = data.size;
      this.pageIndex = data.number;
    });
  }

  onPageChange(event: PageEvent) {
    this.paginationForm.patchValue({ page: event.pageIndex, size: event.pageSize });
    this.getProducts();
  }

}
