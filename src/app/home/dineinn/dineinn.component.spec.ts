/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DineinnComponent } from './dineinn.component';

describe('DineinnComponent', () => {
  let component: DineinnComponent;
  let fixture: ComponentFixture<DineinnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DineinnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DineinnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
