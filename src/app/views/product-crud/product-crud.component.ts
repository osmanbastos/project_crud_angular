import { Component } from '@angular/core';
import { PageNameService } from '../../services/page-name.service';
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [ProductReadComponent],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent {
  constructor(private pageNameService: PageNameService) { }

  ngOnInit() {
    this.pageNameService.setPageName('product-crud');
  }
}
