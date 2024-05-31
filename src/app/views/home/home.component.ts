import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PageNameService } from '../../services/page-name.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private pageNameService: PageNameService) { }
  ngOnInit() { this.pageNameService.setPageName('Home'); }
}
