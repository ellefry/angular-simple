import { Component, OnInit } from '@angular/core';

import { productsStatic, productsStatic2 } from '../products';

import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
@Injectable()
export class ProductListComponent implements OnInit {
  //public products = products;
  public products;
  public products2;
  public p2:productsStatic2;

  share() {
    window.alert('The product has been shared!');
  }

  constructor(private http: HttpClient) { 
    this.products = productsStatic;
    this.products2 =  this.products;
    this.p2={Id:"test"};
    console.log(this.p2);
    
  }

  ngOnInit() {
    //this.products = products;
    //this.authTest();
  }
  
  public authTest(){
    this.http.get("http://localhost:61121/api/authtest").subscribe();
  }

  public extAuthTest(){
    this.http.get("http://localhost:61121/ext/UserCenter/api/home/convertion/1").subscribe();
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/