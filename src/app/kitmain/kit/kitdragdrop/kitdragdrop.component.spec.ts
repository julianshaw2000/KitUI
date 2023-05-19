/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KitdragdropComponent } from './kitdragdrop.component';

describe('KitdragdropComponent', () => {
  let component: KitdragdropComponent;
  let fixture: ComponentFixture<KitdragdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitdragdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitdragdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
