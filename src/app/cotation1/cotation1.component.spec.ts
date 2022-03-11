import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cotation1Component } from './cotation1.component';

describe('Cotation1Component', () => {
  let component: Cotation1Component;
  let fixture: ComponentFixture<Cotation1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cotation1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cotation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
