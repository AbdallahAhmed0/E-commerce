import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../Services/product.service';
import { product } from './../../Model/product';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit,OnDestroy {


  product!:product;
  editFields!:object;

  consoleError:any;
  newProduct!: FormGroup;
  subscrProduct?:Subscription;

    constructor(
            private productService:ProductService,
              private router:Router,
              private fb:FormBuilder,
              private dialogRef: MatDialogRef<AddProductComponent>
            ){
              }


  ngOnInit(): void {
    this.newProduct = this.fb.group({
      title: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
      rating: this.fb.group({
        rate: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
        count: [0, Validators.required]
      })
    });

  }

  close() {
    this.dialogRef.close();
  }     

  onSubmit() {
    if (this.newProduct.valid) {
      const newProduct: product = this.newProduct.value;
      // Handle form submission, e.g., send product data to the backend
      this.dialogRef.close(newProduct); // Pass the new product back to the parent component
    }
  }

  addProduct(){
  // this.subscrProduct= this.productService.addproduct(this.product).subscribe(observer);
  }

goback(){
  this.router.navigateByUrl('/product');
}

get title() {
  return this.newProduct.get('title');
}
get price() {
  return this.newProduct.get('price');
}
get description() {
  return this.newProduct.get('description');
}
get category() {
  return this.newProduct.get('category');
}
get image() {
  return this.newProduct.get('image');
}
get rating(){
  return this.newProduct.get('rating');
}

ngOnDestroy(): void {
this.subscrProduct?.unsubscribe()
}

}

