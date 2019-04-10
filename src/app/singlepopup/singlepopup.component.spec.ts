import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepopupComponent } from './singlepopup.component';

describe('SinglepopupComponent', () => {
  let component: SinglepopupComponent;
  let fixture: ComponentFixture<SinglepopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglepopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
