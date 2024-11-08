import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogeComponent } from '../../../Shared/dialoge/dialoge.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() prd!: any;
  stars = [1, 2, 3, 4, 5];

  constructor(private productService:ProductService,
              private dialog: MatDialog) { }

  ngOnInit(): void {

  }
  
  deleteProduct(id:string){
    const dialogRef = this.dialog.open(DialogeComponent, {
      width: '400px',
      height:'290px'
      });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {

        this.productService.deleteProduct(id);
        window.location.reload();
          }
    });
  }

}
