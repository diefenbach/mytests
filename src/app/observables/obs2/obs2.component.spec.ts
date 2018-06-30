import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Obs2Component } from './obs2.component';

describe('Obs2Component', () => {
  let component: Obs2Component;
  let fixture: ComponentFixture<Obs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Obs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Obs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
