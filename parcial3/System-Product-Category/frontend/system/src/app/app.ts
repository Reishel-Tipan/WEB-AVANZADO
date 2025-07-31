import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit, OnDestroy {
  title = 'Sistema de Gestión';
  showUserMenu = false;
  isOnline = true;
  isMobileView = false;
  private onlineStatusSubscription?: Subscription;

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-menu')) {
      this.showUserMenu = false;
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.checkMobileView();
  }

  ngOnInit() {
    this.checkMobileView();
    this.checkOnlineStatus();
    this.setupOnlineStatusListener();
  }

  ngOnDestroy() {
    if (this.onlineStatusSubscription) {
      this.onlineStatusSubscription.unsubscribe();
    }
  }

  toggleUserMenu(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.showUserMenu = !this.showUserMenu;
  }

  private checkMobileView() {
    this.isMobileView = window.innerWidth < 768;
  }

  private checkOnlineStatus() {
    this.isOnline = navigator.onLine;
  }

  private setupOnlineStatusListener() {
    window.addEventListener('online', () => this.isOnline = true);
    window.addEventListener('offline', () => this.isOnline = false);
  }
}
