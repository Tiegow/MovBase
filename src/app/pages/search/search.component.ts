import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovBuscaComponent } from '../../components/movBusca/movBusca.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule, MovBuscaComponent
  ],
  templateUrl: `./search.component.html`,
  styleUrl: './search.component.css',
})
export class SearchPage implements OnInit{
  route: ActivatedRoute = inject(ActivatedRoute)

  querry = signal<any>("")

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.querry.set(params)   //Lê os parametros na querry da url
    });
  }
}