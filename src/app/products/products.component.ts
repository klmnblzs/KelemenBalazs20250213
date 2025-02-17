import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product, ProductResponse } from '../../models/product';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productService = inject(ProductService);
  products: Product[] = [] 

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (res:any) => {
        this.products = res.products;
      },
      error: (err:any) => {
        console.log(err)
      }
    })
  }
}
