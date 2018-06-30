import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Obs6Component } from './obs6.component';

describe('Obs6Component', () => {
  let component: Obs6Component;
  let fixture: ComponentFixture<Obs6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Obs6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Obs6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
