import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { product } from '../Model/product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOption:any;



  private handleError(error: HttpErrorResponse) {
    // Generic Error handler
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      // Return an observable with a user-facing error message.
    return throwError(
      ()=>new Error('Error occured, please try again')
    )

    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
        return throwError(
          ()=>new Error(error.error.message)
        )

    }
  }

  constructor(private httpClient:HttpClient,
              private _snackBar: MatSnackBar) {


    this.httpOption = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'

      })
    };

  }

  getAllproducts():Observable<product[]>{
    return this.httpClient.get<product[]>(`${environment.APPURL}/products`)
    .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  // getproductsByPage(page:number,size:number):Observable<any>{

  //   return this.httpClient.get<any>(`${environment.APPURL}/products/${page}/${size}`)
  //   .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     );
  // }


  getProductById(id:string):Observable<product>{

    return this.httpClient.get<product>(`${environment.APPURL}/products/${id}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );

  }

  addproduct(product:product):Observable<any>{

  return this.httpClient.post<any>(`${environment.APPURL}/products`,JSON.stringify(product),this.httpOption)
  .pipe(
    retry(2),
    catchError(this.handleError)
  );


  }
  updateProduct(product:product):Observable<any>{
    return  this.httpClient.put<any>(`${environment.APPURL}/products/${product.id}`,JSON.stringify(product),this.httpOption)
    .pipe(
      retry(2),
      catchError(this.handleError)
        );


    }
    deleteProduct(id:string){

      this.httpClient.delete(`${environment.APPURL}/products/${id}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
      .subscribe(data =>{
        this.openSnackBar('Deleted');

      });
    }
    openSnackBar(message: string ) {
      this._snackBar.open(message+" sucessfully","close" ,{
        duration:3000 ,

      });
    }
}
