import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule],
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = { id: 0, name: '', price: 0 };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const productId = parseInt(id, 10); // Convertendo string para número
      (await this.productService.readById(productId)).subscribe((product) => {
        this.product = product;
      });
    }
  }

  async updateProduct(): Promise<void> {
    console.log('Atualizando produto', this.product);
    (await this.productService.update(this.product)).subscribe({
      next: () => {
        this.productService.showMessage('Product updated!');
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error('Update product error:', err);
      }
    });
  }

  cancelProduct(): void {
    this.router.navigate(['/products']);
  }
}