import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from 'src/app/shared/services/database-service.service';
import { Markets } from '../interfaces/markets.interface';
import { MarketsService } from '../services/markets-service.service';
import { LocationsVillage } from '../interfaces/locations-village.interface';


@Component({
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.scss']
})
export class MarketPageComponent implements OnInit {

  constructor(private dbService: DatabaseServiceService,
              private marketsService: MarketsService
  ) { }

  supermarketsList: any;
  supermarketsNameList: string[] = [];
  supermarketsLocationList: string[] = [];
  supermarketsStreetsList: string[] = [];
  showSupermarketDropdown: boolean = true;
  showStreetMarket: boolean = true;
  selectedVillageName: string = '';
  selectedMarketName: string = '';
  selectedMarketAddress: string = '';

  ngOnInit(): void {
    this.loadVillagesList();
  }

  loadVillagesList(): void {
    this.dbService.getLocations().subscribe(villages => {
      if (villages) {
        villages.forEach((villageName: LocationsVillage) => {
          this.supermarketsLocationList.push(villageName.city);
        });
        this.supermarketsLocationList = Array.from(new Set(this.supermarketsLocationList)).sort(); // **
      }
    });
  }

  setMunicipalityName(villageName: any): void {
    this.supermarketsNameList = [];
    this.selectedVillageName = villageName;
    this.marketsService.interchangeMunicipalityName(villageName);

    this.dbService.getSupermarkets().subscribe(supermarkets => {
      supermarkets.forEach((supers: Markets) => {
        if (villageName.startsWith(supers.location)) {
          this.supermarketsNameList.push(supers.name);
        }
      });
      this.supermarketsNameList = Array.from(new Set(this.supermarketsNameList)).sort();
      this.showSupermarketDropdown = false;
    });
  }

  setSupermarketName(marketName: any): void {
    this.supermarketsStreetsList = [];
    this.selectedMarketName = marketName;

    this.dbService.getSupermarkets().subscribe(supermarkets => {
      supermarkets.forEach((supers: Markets) => {
        if (marketName.startsWith(supers.name)) {
          this.marketsService.passVillageSelected$.subscribe(villageNameSelected => {
            if (villageNameSelected.startsWith(supers.location)) {
              this.supermarketsStreetsList.push(supers.address);
            }
          });
        }
      });
      this.supermarketsStreetsList = Array.from(new Set(this.supermarketsStreetsList)).sort();
      this.showStreetMarket = false;
    });
  }

  setMarketOnMap(marketAddress: any): void {
    this.selectedMarketAddress = marketAddress;
    this.marketsService.interchangeAddressOnMap(marketAddress);
  }


}


// Set solo almacena valores únicos. Al pasar this.supermarketsNameList a un Set, automáticamente se eliminan los valores duplicados.
// Array.from(): Convierte el Set de nuevo en un array, ya que Set no es directamente compatible con *ngFor en Angular.