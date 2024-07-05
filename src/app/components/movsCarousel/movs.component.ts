import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, input, inject, OnInit } from '@angular/core';
import { FilmesService } from '../../services/filmes.service';
import { FilmeInterface } from '../../interfaces/FilmeInterface';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-movs',
  standalone: true,
  imports: [
    CommonModule, CarouselModule, RouterModule
  ],
  templateUrl: `./movs.component.html`,
  styleUrl: './movs.component.css',
})

export class MovsComponent implements OnInit{ 
  filmesService: FilmesService = inject(FilmesService)

  mov_cat = input.required<string>()   //Categoria dos filmes
  car_nav = input.required<boolean>()  //Exibir navegadores do carrossel
  img_qtd = input.required<number>()   //Quantidade de imagens por carrossel
  img_cat = input.required<string>()   //Categoria da imagem dos filmes

  hide_rate = input<boolean>()    //Esconder a avaliação dos filmes
  auto_interval = input<number>() //Intervalo do autoplay do carrossel

  filmes: FilmeInterface[] = []   

  ngOnInit(): void {
    switch (this.mov_cat()) {   //A categoria a ser exibida no carrossel
      case "top":
        this.obterListas('top_rated?')
        break;

      case "acao":
        this.genero('28')
        break;
      
      case "anim":
        this.genero('16')
        break;
      
      case "scf":
        this.genero('878')
        break;
      
      case "romance":
        this.genero('10749')
        break;
      
      case "doc":
      this.genero('99')
      break;

      case "hist":
      this.genero('36')
      break;
    
      case "terror":
      this.genero('27')
      break;

      case "western":
      this.genero('37')
      break;

      case "lancamento":
        this.obterListas('upcoming?')
        break;
      
      case "cartaz":
        this.obterListas('now_playing?')
        break;
  
      default:
        break;
    }
  }

  obterListas(categoria: string){   //Receber uma lista específica de filmes (top rated/ upcoming/ now playing...)
    this.filmesService.obterFilmes(categoria).subscribe({
      next: (res: any) => {
        this.filmes = res.results as FilmeInterface[]
        console.log(res.results)
      },
    })
  }

  genero(gen_id: string){   //Receber os filmes por genero
    this.filmesService.obterGenero(gen_id).subscribe({
      next: (res: any) => {
        this.filmes = res.results as FilmeInterface[]
        console.log(res.results)
      },
    })
  }


}