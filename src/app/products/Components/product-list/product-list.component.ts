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
  totalProducts!: number;
  products!: any[];

  constructor(private productService:ProductService,
              private fb:FormBuilder) {

  }

  ngOnInit(): void {
    this.productService.getAllproducts().subscribe(prds => {
      this.products=prds;
    })
    this.paginationForm = this.fb.group({
      page: ['', Validators.required],
      size: ['', Validators.required]
    });
    // this.getProducts();
  }

  getProducts() {
    const page = this.paginationForm.get('page')?.value;
    const size = this.paginationForm.get('size')?.value;

    // Make API call with page and size parameters
      this.productService.getproductsByPage(page,size).subscribe(data =>{

        // Update product list and paginator
          this.products = data;
          console.log(this.products)
          this.totalProducts = data.length;
          this.pageSize = size;
          this.paginator.firstPage();

      })
  }

  onPageChange(event:any) {
    const page = event.pageIndex;
    const size = event.pageSize;
    this.paginationForm.patchValue({ page, size });
    this.getProducts();
  }
}
