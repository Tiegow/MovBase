import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from '../../services/filmes.service';
import { FilmeInterface } from '../../interfaces/FilmeInterface';

@Component({
  selector: 'app-movie-p',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './movieP.component.html',
  styleUrl: './movieP.component.css',
})
export class MoviePage implements OnInit { 
  route: ActivatedRoute = inject(ActivatedRoute)
  filmesService: FilmesService = inject(FilmesService)

  id_param = signal<any>("")
  filme!: FilmeInterface

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id_param.set(params.get('id'))   //Lê o parametro 'id' na url e atualiza a variavel
    });

    this.filmeID()
  }

  filmeID(){   //Receber as informações sobre o filme a partir do id dele
    this.filmesService.obterFilmeID(this.id_param()).subscribe({
      next: (res: any) => {
        this.filme = res as FilmeInterface
      },
    })
  }
}
