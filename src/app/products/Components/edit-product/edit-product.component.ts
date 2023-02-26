import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../../Model/product';
import { Subscription } from 'rxjs';
import { ProductService } from '../../Services/product.service';

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
  codeProduct!:string;
  subscripRoute!:Subscription;

  constructor(private productService:ProductService,
              private activateRoute:ActivatedRoute,
              private router:Router,
              private fb:FormBuilder){}


ngOnInit(): void {

// get Code Of Product by ParamMap
  this.subscripRoute= this.activateRoute.paramMap.subscribe( paramMap  => {
    this.codeProduct = String(paramMap.get('code'));
  })

      // get product by method service getProductByCode
        this.productService.getProductByCode(this.codeProduct).subscribe(prd =>{
        this.getProduct=prd;
    
      // get default Fields to show to admin  
        this.defaultFeilds = Object.entries(this.getProduct.fields);

            this.editProduct = this.fb.group({
            name: [this.getProduct.name,[Validators.required, Validators.minLength(3)]],
            code:[this.getProduct.code,[Validators.required]],
            fields: this.fb.array(this.defaultFeilds.map(field => this.createField(field)))
          });
    })
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
this.router.navigateByUrl('/product');
// this.ProductService.openSnackBar('Added');
},
error: (err:Error)=>{
this.consoleError = err.message
}
}
this.subscrProduct= this.productService.updateProduct(this.product).subscribe(observer);
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

