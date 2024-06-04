import { Component } from '@angular/core';
import { PageNameService } from '../../services/page-name.service';
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [ProductReadComponent, RouterLink, RouterOutlet],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent {
  constructor(
    private router: Router,
    private pageNameService: PageNameService) { }

  ngOnInit() {
    this.pageNameService.setPageName('product-crud');
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }
}
