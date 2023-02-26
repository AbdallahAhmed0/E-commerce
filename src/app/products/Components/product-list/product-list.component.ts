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
    this.products=[{name:"Samsung Galaxy A13 Lte Android Smartphone, 64GB, 4GB RAM, Dual Sim Mobile Phone, Light Blue Uae Version",code:"mb",fields:{price:95,img:"../../../../assets/img/angular-red.png",place:'Giza'}},
    {name:"HONOR X7a Smartphone Unlocked, 6.74-Inch 90Hz Fullview Display, Dual SIM, 50MP Quad Camera with 6000 mAh Battery, 4GB+128GB, Android 12",code:"bk",fields:{price:120,img:"../../../../assets/img/angular-red.png",place:'Cairo',pages:125}},
    {name:"Samsung Galaxy A23 Lte Android Smartphone, 64GB, 4GB RAM, Dual Sim Mobile Phone, Light Blue Uae Version",code:"md",fields:{price:95,img:"../../../../assets/img/angular-red.png",place:'Giza'}},
    {name:"Samsung Galaxy A13 Lte Android Smartphone, 64GB, 4GB RAM, Dual Sim Mobile Phone, Light Blue Uae Version",code:"mb",fields:{price:95,img:"../../../../assets/img/angular-red.png",place:'Giza'}},
    {name:"HONOR X7a Smartphone Unlocked, 6.74-Inch 90Hz Fullview Display, Dual SIM, 50MP Quad Camera with 6000 mAh Battery, 4GB+128GB, Android 12",code:"bk",fields:{price:120,img:"../../../../assets/img/angular-red.png",place:'Cairo',pages:125}},
    {name:"Samsung Galaxy A23 Lte Android Smartphone, 64GB, 4GB RAM, Dual Sim Mobile Phone, Light Blue Uae Version",code:"md",fields:{price:95,img:"../../../../assets/img/angular-red.png",place:'Giza'}},
    {name:"Samsung Galaxy A13 Lte Android Smartphone, 64GB, 4GB RAM, Dual Sim Mobile Phone, Light Blue Uae Version",code:"mb",fields:{price:95,img:"../../../../assets/img/angular-red.png",place:'Giza'}},
    {name:"HONOR X7a Smartphone Unlocked, 6.74-Inch 90Hz Fullview Display, Dual SIM, 50MP Quad Camera with 6000 mAh Battery, 4GB+128GB, Android 12",code:"bk",fields:{price:120,img:"../../../../assets/img/angular-red.png",place:'Cairo',pages:125}},
    {name:"Samsung Galaxy A23 Lte Android Smartphone, 64GB, 4GB RAM, Dual Sim Mobile Phone, Light Blue Uae Version",code:"md",fields:{price:95,img:"../../../../assets/img/angular-red.png",place:'Giza'}},
]
  }

}
