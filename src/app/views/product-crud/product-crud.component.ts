import { Component, OnInit } from '@angular/core';
import { PageNameService } from '../../services/page-name.service';
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [
    ProductReadComponent, 
    RouterLink, 
    RouterOutlet,
    MatSnackBarModule,
    MatButtonModule
  ],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent implements OnInit{

  constructor(
    private router: Router, // Router is a service that provides navigation and URL manipulation capabilities
    private pageNameService: PageNameService) { } // PageNameService is a custom service that provides the page name

  ngOnInit() {
    this.pageNameService.setPageName('product-crud');
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }
}
