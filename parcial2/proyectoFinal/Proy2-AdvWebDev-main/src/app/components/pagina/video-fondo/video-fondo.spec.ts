import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFondo } from './video-fondo';

describe('VideoFondo', () => {
  let component: VideoFondo;
  let fixture: ComponentFixture<VideoFondo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoFondo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoFondo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
