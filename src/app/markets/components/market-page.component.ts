import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from 'src/app/shared/services/database-service.service';
import { Markets } from '../interfaces/markets.interface';

@Component({
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.scss']
})
export class MarketPageComponent implements OnInit{

  constructor(private dbService: DatabaseServiceService){}

  supermarketsList:any;
  supermarketsNameList: string[] = [];
  supermarketsLocationList: string[] = [];

  ngOnInit(): void {
    this.loadSupermarketList();
  }

  loadSupermarketList(): void {
    this.dbService.getSupermarkets().subscribe( supermarkets => {
      console.log('supermarkets', supermarkets)
      if (supermarkets){
        this.supermarketsList = supermarkets;
        this.loadDropdownOptions();
      }
    });
  }

  loadDropdownOptions(): void {
    this.supermarketsList.forEach((markets: Markets) => {
      if (markets){
        this.supermarketsLocationList.push(markets.location);
        this.supermarketsNameList.push(markets.name);
      }
    });
    // Eliminar duplicados
    this.supermarketsNameList = Array.from(new Set(this.supermarketsNameList)).sort(); // **
  }

}


// Set solo almacena valores únicos. Al pasar this.supermarketsNameList a un Set, automáticamente se eliminan los valores duplicados.
// Array.from(): Convierte el Set de nuevo en un array, ya que Set no es directamente compatible con *ngFor en Angular.