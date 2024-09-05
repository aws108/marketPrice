import { Component, OnDestroy, OnInit } from '@angular/core';
import { Locations } from '../../interfaces/locations.interface';
import { Markets } from '../../interfaces/markets.interface';
import { MarketsService } from '../../services/markets-service.service';

import * as L from 'leaflet';
import { Subscription } from 'rxjs';
import { DatabaseServiceService } from 'src/app/shared/services/database-service.service';
import { LocationsVillage } from '../../interfaces/locations-village.interface';
import { TranslateService } from '@ngx-translate/core';

const iconRetinaUrl = 'assets/leaflet/images/marker-icon-2x.png';
const iconUrl = 'assets/leaflet/images/marker-icon.png';
const shadowUrl = 'assets/leaflet/images/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto donde se ancla el icono en las coordenadas
  popupAnchor: [1, -34], // Punto donde el popup debe anclarse en el icono
  shadowSize: [41, 41] // Tamaño de la sombra
});
L.Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'markets-location',
  templateUrl: './markets-location.component.html',
  styleUrls: ['./markets-location.component.css']
})
export class MarketsLocationComponent implements OnInit, OnDestroy {

  private map: L.Map | undefined;
  supermarketsList:any;
  marketsListSub: Subscription = new Subscription();
  selectedVillageSub: Subscription = new Subscription();
  selectedMarketSub: Subscription = new Subscription();
  villageNameString: string = '';
  marketAddressString: string = '';
  locationSelected: LocationsVillage[] = [];

  constructor(private dbService: DatabaseServiceService,
              private translateService: TranslateService,
              private marketsService: MarketsService){}

  ngOnInit(): void {
    this.loadMapData();
    this.loadServices();
    this.initMap();
  }

  loadServices(): void {

    this.selectedVillageSub = this.marketsService.passVillageSelected$.subscribe(villageName => {
      if (villageName){
        this.villageNameString = villageName;
        this.getVillageMap(villageName);
      }
    })

    this.selectedMarketSub = this.marketsService.passMarketSelected$.subscribe(marketAddress =>{
      if (marketAddress){
        this.marketAddressString = marketAddress
        this.getMarketMap();
      }
    });
  }

  loadMapData(): void {
    this.dbService.getSupermarkets().subscribe(supermarkets => {
      console.log('supermarkets', supermarkets)
      if (supermarkets) {
        this.supermarketsList = supermarkets;
        this.addMarkers();
      }
    });
  }

  initMap(): void {
    this.map = L.map('map', {
      center: [40.416775, -3.703790], // Coordenadas de Madrid, España
      zoom: 6  // Nivel de zoom para ver toda España
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // Añade una capa de mapa (OpenStreetMap)
      maxZoom: 19,
    }).addTo(this.map);
  }

  addMarkers(): void {
    let locations:Locations[] = [];
    
    this.supermarketsList.forEach((market: Markets) => {
      if (market.address && market.latitude && market.longitude){
        locations.push({
          address: market.address,
          name: market.name,
          lat: market.latitude,
          lng: market.longitude
        });
      }
    });

    // Itera sobre las ubicaciones y añade un marcador para cada una
    locations.forEach(location => {
      const marker = L.marker([location.lat, location.lng])
        .addTo(this.map!)
        // .bindPopup(`<b>${location.name}</b>`)
        // marker.openPopup();
    });
  }

  getVillageMap(villageName: any): void {
    this.locationSelected = [];

    this.dbService.getLocations().subscribe((locations: LocationsVillage[]) => {
      this.supermarketsList.forEach((market: Markets) => {
        if (locations && villageName) {
          locations.forEach((location: LocationsVillage) => {
            if (location.city.startsWith(villageName)) {
              this.locationSelected.push(location);
              this.map?.setView([location.latitude, location.longitude], 14); // setView ajusta el mapa a las nuevas coordenadas y ajusta el nivel de zoom
            }
          });
        }
      });
    });
  }

  getMarketMap(): void {
    this.locationSelected.forEach(location => {
      
      this.supermarketsList.forEach((market: Markets) => {
        if (this.villageNameString.startsWith(market.location) && this.marketAddressString.startsWith(market.address)) {
          if (this.map) {
            if (location.city.startsWith(market.location)) {
              this.map?.setView([market.latitude, market.longitude], 19);
              const marker = L.marker([market.latitude, market.longitude]);
              marker.bindPopup(`
                <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333; align-items: center; display: flex; flex-direction: column;">
                  <img src="${market.img}" alt="${market.name}" style="width: 100px; height: auto; display: block; margin-bottom: 15px;">
                  <strong>${market.address}</strong> ${location.city} (${location.code}), ${location.province}
                  <p>${this.translateService.instant('popUp.opening-hours')}: ${market.opening_hours}</p>
                </div>
              `);
              marker.addTo(this.map);
              marker.openPopup();
            }
          }
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.marketsListSub.unsubscribe();
    this.selectedVillageSub.unsubscribe();
    this.selectedMarketSub.unsubscribe();
  }

}
