/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompdragdropComponent } from './compdragdrop.component';

describe('CompdragdropComponent', () => {
  let component: CompdragdropComponent;
  let fixture: ComponentFixture<CompdragdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompdragdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompdragdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
