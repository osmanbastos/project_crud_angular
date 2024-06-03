import { Component, Input, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit { // Implementa o OnInit
  imageSrc: string = '';

  @Input() pageName = '';

  ngOnInit(): void {
    this.imageSrc = '../../../../assets/ATELIER2.png';
  }
}
