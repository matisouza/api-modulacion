import { Component } from '@angular/core';
import { IUserForm } from '../../login/interfaces/user-form.interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  valueForm!: IUserForm;
  valueB!: boolean;

  constructor(
    private dataService: DataService,
  ){
    this.dataService.subjectForm$.subscribe(data => this.valueForm = data)
    this.dataService.subjectBoolean$.subscribe(data => this.valueB = data)
  }

}
