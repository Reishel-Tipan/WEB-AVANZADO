import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre-mi.html',
  styleUrls: ['./sobre-mi.css',
              '../../styles.css']
})
export class SobreMi {
  constructor() {}
}
