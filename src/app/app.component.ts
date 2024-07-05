import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MovsComponent } from './components/movsCarousel/movs.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovsComponent, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private _router: Router) { }
  title = 'MovBase';

  busca: string = ""

  handleSubmit(){
    if(!this.busca) return   //Se o campo de busca for vazio
    this._router.navigateByUrl('search?busca='+this.busca)   //Navega para a página de busca passando o valor da busca na url
    this.busca = ""
  }
}
