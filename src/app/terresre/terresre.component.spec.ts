import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerresreComponent } from './terresre.component';

describe('TerresreComponent', () => {
  let component: TerresreComponent;
  let fixture: ComponentFixture<TerresreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerresreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerresreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
