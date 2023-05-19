import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockkitComponent } from './stockkit.component';

describe('StockkitComponent', () => {
  let component: StockkitComponent;
  let fixture: ComponentFixture<StockkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockkitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
