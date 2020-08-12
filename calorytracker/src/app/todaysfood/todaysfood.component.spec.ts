import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysfoodComponent } from './todaysfood.component';

describe('TodaysfoodComponent', () => {
  let component: TodaysfoodComponent;
  let fixture: ComponentFixture<TodaysfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
