import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from './routing.module';

import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MaterialModule } from '../modules/material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchComponent,
    ResultComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    MaterialModule,

    FormsModule,
  ],
  exports:[
    MainPageComponent
  ]
})
export class DashboardModule { }
