import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../../views/home/home.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatListModule, 
    MatSidenavModule,
    MatToolbarModule,
    RouterOutlet,
    HomeComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
