import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketsService {

  constructor() { }

  private interchangeMarketsListSub = new BehaviorSubject<any>(null);
  passMarketstList$ = this.interchangeMarketsListSub.asObservable();

  private interchangeVillageSelectedSub = new BehaviorSubject<any>(null);
  passVillageSelected$ = this.interchangeVillageSelectedSub.asObservable();

  private interchangeMarketSelectedSub = new BehaviorSubject<any>(null);
  passMarketSelected$ = this.interchangeMarketSelectedSub.asObservable();

  interchangeSupermarketsList(marketList: any) {
    this.interchangeMarketsListSub.next(marketList);
  }

  interchangeMunicipalityName(villageName: any){
    this.interchangeVillageSelectedSub.next(villageName);
  }

  interchangeAddressOnMap(marketAddress: any){
    this.interchangeMarketSelectedSub.next(marketAddress);
  }

}
