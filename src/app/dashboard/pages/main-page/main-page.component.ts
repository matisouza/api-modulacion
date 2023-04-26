import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nombre: string = 'Matias Souza'

  valueInput(nombre: string) {
    this.nombre = nombre
  }
}
