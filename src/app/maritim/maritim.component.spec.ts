import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritimComponent } from './maritim.component';

describe('MaritimComponent', () => {
  let component: MaritimComponent;
  let fixture: ComponentFixture<MaritimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaritimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaritimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
