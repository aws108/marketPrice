import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsComparisonComponent } from './markets-comparison.component';

describe('MarketsComparisonComponent', () => {
  let component: MarketsComparisonComponent;
  let fixture: ComponentFixture<MarketsComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketsComparisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketsComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
