import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondomanageComponent } from './condomanage.component';

describe('CondomanageComponent', () => {
  let component: CondomanageComponent;
  let fixture: ComponentFixture<CondomanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondomanageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondomanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
