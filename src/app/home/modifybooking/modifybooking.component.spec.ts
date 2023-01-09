/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModifybookingComponent } from './modifybooking.component';

describe('ModifybookingComponent', () => {
  let component: ModifybookingComponent;
  let fixture: ComponentFixture<ModifybookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifybookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifybookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
