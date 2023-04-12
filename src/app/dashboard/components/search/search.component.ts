import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @ViewChild('searchTxt') searchTxt!: ElementRef<HTMLInputElement>

  constructor(
    private apiService: ApiService,
  ) { }

  search(): void {
    const value = this.searchTxt.nativeElement.value;

    this.apiService.getGifs(value);
    this.searchTxt.nativeElement.value = ''
  }
}
