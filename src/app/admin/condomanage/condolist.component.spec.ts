import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondolistComponent } from './condolist.component';

describe('CondolistComponent', () => {
  let component: CondolistComponent;
  let fixture: ComponentFixture<CondolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
