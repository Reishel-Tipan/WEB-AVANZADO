import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyectos } from './proyectos';

describe('Proyectos', () => {
  let component: Proyectos;
  let fixture: ComponentFixture<Proyectos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proyectos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proyectos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
