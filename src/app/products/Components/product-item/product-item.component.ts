import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() prd!: any;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  deleteProduct(code:string){
    this.productService.deleteProduct(code);
  }
}
