import { AfterViewInit, Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
declare var bootstrap: any; //bootstrap no está tipado en TypeScript de manera predeterminada, tienes que importar Bootstrap manualmente en tu archivo TypeScript.

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit, AfterViewInit {

  constructor(private translate: TranslateService){}

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngAfterViewInit(): void {
    // Inicializar tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

}
