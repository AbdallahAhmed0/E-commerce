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
    })
  //   this.products=[{name:"Medicine",code:"md",fields:{price:95,img:"../../../../assets/img/angular-red.png",place:'Giza'}},
  //   {name:"Book",code:"bk",fields:{price:120,img:"../../../../assets/img/angular-red.png",place:'Cairo',pages:125}},
  //   {name:"Medicine",code:"md",fields:{price:95,img:"../../../../assets/img/angular-red.png",place:'Giza'}},
  //   {name:"Book",code:"bk",fields:{price:120,img:"../../../../assets/img/angular-red.png",place:'Cairo',pages:125}},
  //   {name:"Medicine",code:"md",fields:{price:95,img:"../../../../assets/img/angular-red.png",place:'Giza'}},
  //   {name:"Book",code:"bk",fields:{price:120,img:"../../../../assets/img/angular-red.png",place:'Cairo',pages:125}},
  //   {name:"Medicine",code:"md",fields:{price:95,img:"../../../../assets/img/angular-red.png",place:'Giza'}},
  //   {name:"Book",code:"bk",fields:{price:120,img:"../../../../assets/img/angular-red.png",place:'Cairo',pages:125}},
  //   {name:"Medicine",code:"md",fields:{price:95,img:"../../../../assets/img/angular-red.png",place:'Giza'}},
  //   {name:"Book",code:"bk",fields:{price:120,img:"../../../../assets/img/angular-red.png",place:'Cairo',pages:125}}]
  }

}
