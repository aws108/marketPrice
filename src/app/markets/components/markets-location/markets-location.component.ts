import { Component } from '@angular/core';
import { Locations } from '../../interfaces/locations.interface';

import * as L from 'leaflet';
import { Markets } from '../../interfaces/markets.interface';
import { MarketsService } from '../../services/markets-service.service';


@Component({
  selector: 'markets-location',
  templateUrl: './markets-location.component.html',
  styleUrls: ['./markets-location.component.css']
})
export class MarketsLocationComponent {

  private map: L.Map | undefined;
  supermarketsList:any;

  constructor(private marketsService: MarketsService){}

  ngOnInit(): void {
    this.loadServices();
    this.initMap();
  }

  loadServices(): void {
    this.marketsService.passMarketstList$.subscribe(supermarkets =>{
      if (supermarkets){
        this.supermarketsList = supermarkets;
      }
    });
  }

  initMap(): void {
    this.map = L.map('map', {
      center: [40.416775, -3.703790], // Coordenadas de Madrid, España
      zoom: 6  // Nivel de zoom para ver toda España
    });

    // Añade una capa de mapa (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);

    this.addMarkers();
  }

  addMarkers(): void {
    let locations:Locations[] = [];
  
    this.supermarketsList.forEach((market: Markets) => {
      if (market.address && market.latitude && market.longitude){
        locations.push({
          name: market.address,
          lat: market.latitude,
          lng: market.longitude
        });
      }
    });

    // Itera sobre las ubicaciones y añade un marcador para cada una
    locations.forEach(location => {
      const marker = L.marker([location.lat, location.lng])
        .addTo(this.map!)
        .bindPopup(`<b>${location.name}</b>`)
    });
  }

}
