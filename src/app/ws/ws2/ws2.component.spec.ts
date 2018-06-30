import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ws2Component } from './ws2.component';

describe('Ws2Component', () => {
  let component: Ws2Component;
  let fixture: ComponentFixture<Ws2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ws2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ws2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
