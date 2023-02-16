import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { product } from '../../Model/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit,OnDestroy {
  product!:product;
  editFields!:object;

  consoleError:any;
  newProduct!: FormGroup;
  subscrProduct?:Subscription;

  constructor(
    // private ProductService:ProductService,
      private router:Router,
      private fb:FormBuilder){
      }


ngOnInit(): void {
this.newProduct = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    code:['',[Validators.required]],
    fields: this.fb.array([this.createField()])
  });

}

createField():FormGroup {
return this.fb.group({
    key: ['', Validators.required],
    value: ['']
  });

}

addField(): void {
  (this.newProduct.get('fields') as FormArray).push(this.createField());
}

deleteField(index: number): void {
  (this.newProduct.get('fields') as FormArray).removeAt(index);
}

convertArrToObj(arr:any):object{
  const obj = arr.reduce((acc:any, curr:any) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {});
  return obj;
}




addProduct(){
this.editFields =this.convertArrToObj(this.newProduct.value.fields);
this.product=this.newProduct.value;
this.product.fields=this.editFields;

console.log(this.product);
const observer={
next: (product:any) => {
this.router.navigateByUrl('/Products');
// this.ProductService.openSnackBar('Added');
},
error: (err:Error)=>{
this.consoleError = err.message
}
}
//  this.subscrProduct= this.ProductService.addproduct(this.product).subscribe(observer);
}

goback(){
this.router.navigateByUrl('/product');
}

get name() {
return this.newProduct.get('name');
}
get code() {
return this.newProduct.get('code');
}
get fieldsArray(): FormArray {
return this.newProduct.get('fields') as FormArray;
}


ngOnDestroy(): void {
this.subscrProduct?.unsubscribe()
}

}

