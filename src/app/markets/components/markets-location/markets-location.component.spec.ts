import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsLocationComponent } from './markets-location.component';

describe('MarketsLocationComponent', () => {
  let component: MarketsLocationComponent;
  let fixture: ComponentFixture<MarketsLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketsLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
