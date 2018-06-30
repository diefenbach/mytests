import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ws1Component } from './ws1.component';

describe('Ws1Component', () => {
  let component: Ws1Component;
  let fixture: ComponentFixture<Ws1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ws1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ws1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
