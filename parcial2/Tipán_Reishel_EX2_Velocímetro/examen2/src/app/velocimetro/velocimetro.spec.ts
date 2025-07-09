import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Velocimetro } from './velocimetro';

describe('Velocimetro', () => {
  let component: Velocimetro;
  let fixture: ComponentFixture<Velocimetro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Velocimetro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Velocimetro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
