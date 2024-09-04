import { AfterViewInit, Component, OnInit} from '@angular/core';
declare var bootstrap: any; //bootstrap no está tipado en TypeScript de manera predeterminada, tienes que importar Bootstrap manualmente en tu archivo TypeScript.

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit, AfterViewInit {

  constructor(){}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    // Inicializar tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }



}
