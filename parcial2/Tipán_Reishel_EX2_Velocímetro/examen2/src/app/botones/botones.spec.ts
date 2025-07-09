import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Botones } from './botones';

describe('Botones', () => {
  let component: Botones;
  let fixture: ComponentFixture<Botones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Botones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Botones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
