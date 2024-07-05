import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmeInterface } from '../interfaces/FilmeInterface';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  api_key = 'api_key=1fafae59993ade172f4f9c9a05d4196e'
  api_url = 'https://api.themoviedb.org/3/movie/'
  discover_mv = 'https://api.themoviedb.org/3/discover/movie?api_key=1fafae59993ade172f4f9c9a05d4196e&with_genres='
  searched_mv = 'https://api.themoviedb.org/3/search/movie?query='

  imgs_M = 'https://image.tmdb.org/t/p/w200/'
  imgs_G = 'https://image.tmdb.org/t/p/w500/'

  constructor(private httpClient: HttpClient) { }

  obterGenero(gen_id: string){   //Obter uma lista de filmes com o id do genero informado
    return this.httpClient.get<FilmeInterface>(this.discover_mv+gen_id)
  }
  
  obterPesquisa(val_busca: string){   //Obter uma lista de filmes com titulos baseados no valor de busca
    return this.httpClient.get<FilmeInterface>(this.searched_mv+val_busca+"&language=pt-BR&"+this.api_key)
  }

  obterFilmeID(id: string){   //Obter um filme especifico pelo seu id
    return this.httpClient.get<FilmeInterface>(this.api_url+id+'?language=pt-BR&'+this.api_key)
  }

  obterImagem(poster_path: string): string{   //Retorna o link da imagem do filme selecionado
    return this.imgs_M + poster_path
  }

  obterImagemGG(poster_path: string){   //Retorna o link da imagem do filme selecionado com resolução aumentada
    return this.imgs_G + poster_path
  }

  obterFilmes(espec: string){   //Obter filmes com base na especificação informada
    return this.httpClient.get<FilmeInterface>(this.api_url+espec+this.api_key)
  }
}
