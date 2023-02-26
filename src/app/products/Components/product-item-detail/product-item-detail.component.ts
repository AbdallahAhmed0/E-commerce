import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from './../../Services/product.service';
import { product } from './../../Model/product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss']
})
export class ProductItemDetailComponent implements OnInit,OnDestroy {

  codeProduct!:string;
  subscripRoute!:Subscription;
  product!:any;
  constructor(private activateRoute: ActivatedRoute,
              private router:Router,
              private productService:ProductService) { }
  ngOnInit(): void {

    this.subscripRoute= this.activateRoute.paramMap.subscribe( paramMap  => {
    this.codeProduct = String(paramMap.get('code'));
  })
this.productService.getProductByCode(this.codeProduct).subscribe(prd =>{
  this.product=prd;
})
this.product={name:"Book",code:"bk",fields:{price:120,img:"../../../../assets/img/angular-red.png",place:'Cairo',pages:125,
des:"Healthy and friendly ecological board material, which is waterproof and mothproof, high hardness, and easy to clean Easy installation, bearings can be installed by aligning the clamps Accompany a good partner, safe and , you can use it with confidence You can put it in its cage or outside. Pet pets always require a toy for them to play and they will have fun with it. Serve for hamster, guinea pig chinchilla, etc."}}
  }

deleteProduct(code:string){
  this.productService.deleteProduct(code);
  this.router.navigateByUrl('/product');
}


ngOnDestroy(): void {
this.subscripRoute.unsubscribe();
  }

}
