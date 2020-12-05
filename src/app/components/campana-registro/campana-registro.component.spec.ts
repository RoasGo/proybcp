import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanaRegistroComponent } from './campana-registro.component';

describe('CampanaRegistroComponent', () => {
  let component: CampanaRegistroComponent;
  let fixture: ComponentFixture<CampanaRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanaRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
