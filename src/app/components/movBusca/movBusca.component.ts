import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilmeInterface } from '../../interfaces/FilmeInterface';
import { FilmesService } from '../../services/filmes.service';

@Component({
  selector: 'app-mov-busca',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './movBusca.component.html',
  styleUrl: './movBusca.component.css',
})
export class MovBuscaComponent implements OnInit, OnChanges{ 
  busca = input.required<string>()   //Valor da busca

  filmesService: FilmesService = inject(FilmesService)

  filmes_pesquisa: FilmeInterface[] = []

  ngOnInit(): void {
    this.buscados()
  }

  ngOnChanges(): void { //Executa quando é alterado o valor de 'busca'
    this.buscados()
  }

  buscados(){
    this.filmesService.obterPesquisa(this.busca()).subscribe({
      next: (res: any) => {
        this.filmes_pesquisa = res.results as FilmeInterface[]
      },
    })
  }
}
