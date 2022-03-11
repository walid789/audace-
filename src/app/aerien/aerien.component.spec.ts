import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerienComponent } from './aerien.component';

describe('AerienComponent', () => {
  let component: AerienComponent;
  let fixture: ComponentFixture<AerienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AerienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AerienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
