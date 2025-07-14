import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-video-fondo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './video-fondo.component.html',
  styleUrls: ['./video-fondo.component.css']
})
export class VideoFondoComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  videoSource = 'assets/videos/code-bg.mp4';
  showFallback = false;
  loading = true;

  ngAfterViewInit() {
    console.log('Inicializando reproductor de video...');
    const video = this.videoPlayer.nativeElement;
    
    // Configurar el video
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    
    // Forzar la carga del video
    video.load();
    
    // Verificar si el video se puede reproducir
    const canPlayHandler = () => {
      console.log('El video puede reproducirse');
      this.loading = false;
      
      // Intentar reproducir el video
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log('Reproducción iniciada con éxito');
          this.loading = false;
        }).catch(error => {
          console.error('Error al reproducir automáticamente:', error);
          video.controls = true; // Mostrar controles si falla la reproducción automática
          this.loading = false;
        });
      }
    };
    
    // Configurar manejadores de eventos
    video.oncanplaythrough = canPlayHandler;
    video.onplaying = () => console.log('El video se está reproduciendo');
    video.onwaiting = () => console.log('El video está esperando datos');
    video.onstalled = () => console.error('La reproducción se ha detenido por falta de datos');
    video.onsuspend = () => console.log('La carga del video se ha pausado');
    
    // Manejar errores de carga
    video.onerror = (e) => {
      console.error('Error al cargar el video:', e);
      console.error('Código de error:', video.error);
      this.onVideoError();
    };
    
    console.log('Fuente del video:', video.src);
    console.log('Estado del video:', {
      readyState: video.readyState,
      networkState: video.networkState,
      error: video.error
    });
  }

  onVideoLoaded() {
    this.loading = false;
  }

  onVideoError() {
    console.error('Error al cargar el video');
    this.showFallback = true;
    this.loading = false;
  }
}
