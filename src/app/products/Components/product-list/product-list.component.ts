import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!:any[];
  constructor(private productService:ProductService) {

  }

  ngOnInit(): void {
    this.productService.getAllproducts().subscribe(prds => {
      this.products=prds;
      console.log(this.products)
    })
//     this.products=[{name:"Modern Rubber Chair",code:"mb",fields:{price:95,img:"../../../../assets/img/sidebar-4.jpg",place:'Giza'}},
//     {name:"Rustic Rubber Gloves",code:"bk",fields:{price:120,img:"../../../../assets/img/sidebar-3.jpg",place:'Cairo',pages:125}},
//     {name:"Practical Concrete Computer",code:"md",fields:{price:95,images:"../../../../assets/img/sidebar-5.jpg",place:'Giza'}},
//     {name:"Modern Rubber Chair",code:"mb",fields:{price:95,images:"../../../../assets/img/sidebar-2.jpg",place:'Giza'}},
//     {name:"Modern Rubber Chair",code:"bk",fields:{price:120,img:"../../../../assets/img/sidebar-1.jpg",place:'Cairo',pages:125}},
//     {name:"Modern Rubber Chair",code:"md",fields:{price:95,images:"../../../../assets/img/mask.png",place:'Giza'}},
//     {name:"Practical Concrete Computer",code:"mb",fields:{price:95,images:"../../../../assets/img/new_logo.png",place:'Giza'}},
//     {name:"Modern Rubber Chair",code:"bk",fields:{price:120,images:"../../../../assets/img/default-avatar.png",place:'Cairo',pages:125}},
//     {name:"Modern Rubber Chair",code:"md",fields:{price:95,images:"../../../../assets/img/angular-red.png",place:'Giza'}},
// ]
  }

}
