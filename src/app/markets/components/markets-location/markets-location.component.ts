import { Component } from '@angular/core';
import { Locations } from '../../interfaces/locations.interface';
import { Markets } from '../../interfaces/markets.interface';
import { MarketsService } from '../../services/markets-service.service';

import * as L from 'leaflet';

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
      console.log('superrrrrrrrs', supermarkets)
      if (supermarkets){
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

    // Añade una capa de mapa (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);

    // this.addMarkers();
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
