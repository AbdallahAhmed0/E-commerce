import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { ProductService } from './../../Services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ProductListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageSize: number=8;
  totalElements!: number;
  pageIndex:number=0;
  products!: any[];
  constructor(private productService:ProductService,
              private fb:FormBuilder,
              private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.productService.getAllproducts().subscribe(prds => {
      this.products=prds;
    })

    // this.getProducts();
  }
  openProductForm() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: 'auto',
      maxHeight: '95vh',  // Limit height to viewport
      height: 'auto',       // Allow dialog to adjust height
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle the newly added product (result), e.g., add it to your product list
        console.log('New Product:', result);
      }
    });
  }
  getProducts() {

    // this.productService.getproductsByPage(this.pageIndex, this.pageSize).subscribe(data => {
    //   this.products = data.content;
    //   this.totalElements = data.totalElements;
    //   this.pageSize = data.size;
    //   this.pageIndex = data.number;
    // });
  }

  // onPageChange(event: PageEvent) {
  //   this.pageIndex= event.pageIndex;
  //   this.pageSize= event.pageSize
  //   this.getProducts();
  // }

}
