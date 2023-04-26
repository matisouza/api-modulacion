import { Component, Input } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  //Recibir desde el padre información
  @Input() nombreHijo: string = 'aca va un nombre'

  constructor(
    private aipService: ApiService,
  ){}

  get result(): Gif[]{
    return this.aipService.result
  }
}
