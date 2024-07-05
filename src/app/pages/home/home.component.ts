import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovsComponent } from '../../components/movsCarousel/movs.component';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, MovsComponent, CarouselModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomePage { 
}
