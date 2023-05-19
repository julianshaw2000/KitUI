/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoardcompComponent } from './boardcomp.component';

describe('BoardcompComponent', () => {
  let component: BoardcompComponent;
  let fixture: ComponentFixture<BoardcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
