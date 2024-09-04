import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketsService {

  constructor() { }

  private interchangeMarketsListSub = new BehaviorSubject<any>(null);
  passMarketstList$ = this.interchangeMarketsListSub.asObservable();

  interchangeSupermarketsList(marketList: any) {
    this.interchangeMarketsListSub.next(marketList);
  }

}
