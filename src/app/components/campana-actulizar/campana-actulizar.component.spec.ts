import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanaActulizarComponent } from './campana-actulizar.component';

describe('CampanaActulizarComponent', () => {
  let component: CampanaActulizarComponent;
  let fixture: ComponentFixture<CampanaActulizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanaActulizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanaActulizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
