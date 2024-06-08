import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [ MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule ],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit {

  product: Product = { id: 0, name: '', price: 0};

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const productId = parseInt(id, 10); // Convertendo string para número
      this.productService.readById(productId).subscribe((product) => {
        this.product = product;
      });
    }
  }

  async deleteProduct(): Promise<void> {
    console.log('Deletando produto', this.product);
    (await this.productService.delete(this.product)).subscribe({
      next: () => {
        this.productService.showMessage('Product deleted!');
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error('Delete product error:', err);
      }
    });
  }

  cancelProduct(): void {
    this.router.navigate(['/products']);
  }

}
