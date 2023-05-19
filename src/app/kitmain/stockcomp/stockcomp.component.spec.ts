import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockcompComponent } from './stockcomp.component';

describe('StockcompComponent', () => {
  let component: StockcompComponent;
  let fixture: ComponentFixture<StockcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
