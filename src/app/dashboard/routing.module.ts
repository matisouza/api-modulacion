import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'gifs', component: MainPageComponent },
      { path: '**', redirectTo: 'gifs' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
