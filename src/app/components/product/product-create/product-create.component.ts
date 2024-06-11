import { Product } from '../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit{
  
  product: Product = {
    name: '',
    price: null
  }

  constructor( 
    private productService: ProductService,
    private router: Router) {}
  
  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Product created!');
      this.router.navigate(['/products']);
    })
  }

  cancelProduct(): void {
    this.router.navigate(['/products']);
  }
}
