import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Obs7Component } from './obs7.component';

describe('Obs7Component', () => {
  let component: Obs7Component;
  let fixture: ComponentFixture<Obs7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Obs7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Obs7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
