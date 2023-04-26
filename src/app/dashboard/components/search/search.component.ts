import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  // inputValue!: string

  @ViewChild('searchTxt') searchTxt!: ElementRef<HTMLInputElement>

  // Emitiendo un evento desde el hijo, hacia el padre.
  @Output() envioDelHijoAlPadre = new EventEmitter<string>()

  constructor(
    private apiService: ApiService,
  ) { }

  search(): void {
    const value = this.searchTxt.nativeElement.value;

    this.apiService.getGifs(value);

    this.envioDelHijoAlPadre.emit(value)

    this.searchTxt.nativeElement.value = ''
  }
}
