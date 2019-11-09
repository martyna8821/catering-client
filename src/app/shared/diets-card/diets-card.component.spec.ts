import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietsCardComponent } from './diets-card.component';

describe('DietsCardComponent', () => {
  let component: DietsCardComponent;
  let fixture: ComponentFixture<DietsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
