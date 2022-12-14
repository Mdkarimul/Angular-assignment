import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComComponent } from './first-com.component';

describe('FirstComComponent', () => {
  let component: FirstComComponent;
  let fixture: ComponentFixture<FirstComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
