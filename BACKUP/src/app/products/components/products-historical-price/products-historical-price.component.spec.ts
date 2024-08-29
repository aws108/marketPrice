import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsHistoricalPriceComponent } from './products-historical-price.component';

describe('ProductsHistoricalPriceComponent', () => {
  let component: ProductsHistoricalPriceComponent;
  let fixture: ComponentFixture<ProductsHistoricalPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsHistoricalPriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsHistoricalPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
