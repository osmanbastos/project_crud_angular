import { ChangeDetectorRef, OnInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { PageNameService } from './services/page-name.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet ,
      HeaderComponent,
      NavComponent,
      FooterComponent,
      HomeComponent
    ]
})

export class AppComponent implements OnInit {
  pageName: string = '';

  constructor(private pageNameService: PageNameService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.pageNameService.pageName$.subscribe(name => {
      this.pageName = name;
      this.cdr.detectChanges(); // This line is missing in the original code
    });
  }
}
