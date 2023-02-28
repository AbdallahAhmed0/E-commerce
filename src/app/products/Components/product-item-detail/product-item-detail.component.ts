import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from './../../Services/product.service';
import { product } from './../../Model/product';
import { DialogeComponent } from '../../../material/dialoge/dialoge.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss']
})
export class ProductItemDetailComponent implements OnInit,OnDestroy {

  codeProduct!:string;
  subscripRoute!:Subscription;
  product!:product;
  constructor(private activateRoute: ActivatedRoute,
              private router:Router,
              private productService:ProductService,
              private dialog: MatDialog) { }
  ngOnInit(): void {

    this.subscripRoute= this.activateRoute.paramMap.subscribe( paramMap  => {
    this.codeProduct = String(paramMap.get('code'));
  })
this.productService.getProductByCode(this.codeProduct).subscribe(prd =>{
  this.product=prd;
})

}


deleteProduct(code:string){
  const dialogRef = this.dialog.open(DialogeComponent, {
    width: '400px',
    height:'290px'
    });

  dialogRef.afterClosed().subscribe((result) => {
    if (result === 'confirm') {

      this.productService.deleteProduct(code);
      this.router.navigateByUrl('/product');
        }
  });
}


ngOnDestroy(): void {
this.subscripRoute.unsubscribe();
  }

}
