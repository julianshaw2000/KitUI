/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoardkitComponent } from './boardkit.component';

describe('BoardkitComponent', () => {
  let component: BoardkitComponent;
  let fixture: ComponentFixture<BoardkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
