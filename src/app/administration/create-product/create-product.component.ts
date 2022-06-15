import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/products';
import { LoadProductsService } from 'src/app/core/services/productServices/load-products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  host:{
    class:'container mt-5'
  }
})
export class CreateProductComponent implements OnInit {
  
  product = new Product;
  productName:string;
  productPrice:number;
  productDescription:string;
  productStock:number;

  constructor(private loadProductsService : LoadProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(){

    this.product.name = this.productName;
    this.product.description = this.productDescription;
    this.product.price = this.productPrice;
    this.product.stock = this.productStock;

    this.loadProductsService.saveProduct(this.product).subscribe(data => {
      alert('Guardado exitosamente');
    })

    this.router.navigate(['/']);
  }
  

}
