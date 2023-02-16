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
  getProduct!:product;
  editFields!:object;
  defaultFeilds!:any[];

  consoleError:any;
  editProduct!: FormGroup;
  subscrProduct?:Subscription;

  constructor(
    // private ProductService:ProductService,
      private router:Router,
      private fb:FormBuilder){

        this.getProduct={name:"Book",code:"bk",fields:{price:120,img:"../../../../assets/img/angular-red.png",place:'Cairo',pages:125,
        des:"Healthy and friendly ecological board material, which is waterproof and mothproof, high hardness, and easy to clean Easy installation, bearings can be installed by aligning the clamps Accompany a good partner"}};

        this.defaultFeilds = Object.entries(this.getProduct.fields);

      }


ngOnInit(): void {
    this.editProduct = this.fb.group({
    name: [this.getProduct.name,[Validators.required, Validators.minLength(3)]],
    code:[this.getProduct.code,[Validators.required]],
    fields: this.fb.array(this.defaultFeilds.map(field => this.createField(field)))
  });

        }

        createField(defaultField = []): FormGroup {
          return this.fb.group({
            key: [defaultField[0], Validators.required],
            value: [defaultField[1]]
          });
        }


addField(): void {
  (this.editProduct.get('fields') as FormArray).push(this.createField());
}

deleteField(index: number): void {
  (this.editProduct.get('fields') as FormArray).removeAt(index);
}

convertArrToObj(arr:any):object{
  const obj = arr.reduce((acc:any, curr:any) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {});
  return obj;
}




EditProduct(){
this.editFields =this.convertArrToObj(this.editProduct.value.fields);
this.product=this.editProduct.value;
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
return this.editProduct.get('name');
}
get code() {
return this.editProduct.get('code');
}
get fieldsArray(): FormArray {
return this.editProduct.get('fields') as FormArray;
}


ngOnDestroy(): void {
this.subscrProduct?.unsubscribe()
}

}

