import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTouristComponent } from './show-tourist.component';

describe('ShowTouristComponent', () => {
  let component: ShowTouristComponent;
  let fixture: ComponentFixture<ShowTouristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTouristComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
