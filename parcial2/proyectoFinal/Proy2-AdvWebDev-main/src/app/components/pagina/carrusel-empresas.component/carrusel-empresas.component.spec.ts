import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselEmpresasComponent } from './carrusel-empresas.component';

describe('CarruselEmpresasComponent', () => {
  let component: CarruselEmpresasComponent;
  let fixture: ComponentFixture<CarruselEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselEmpresasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
