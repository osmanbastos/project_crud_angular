import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit { // Implementa o OnInit
  imageSrc: string = '';

  constructor(private breakpointObserver: BreakpointObserver) {} // Injeta o BreakpointObserver

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall, // Menor que 600px
      Breakpoints.Small, // Entre 600px e 959px
      Breakpoints.Medium, // Entre 960px e 1279px
      Breakpoints.Large, // Entre 1280px e 1919px
      Breakpoints.XLarge // Maior que 1920px
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.imageSrc = '../../../../assets/meuLogoLogo.png';
        } else if (result.breakpoints[Breakpoints.Small] || result.breakpoints[Breakpoints.Medium] || result.breakpoints[Breakpoints.Large] || result.breakpoints[Breakpoints.XLarge]) {
          this.imageSrc = '../../../../assets/meuLogoHorizontal.png';
        }
      }
    });
  }
}
