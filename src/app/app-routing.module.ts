import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { JogosComponent } from './jogos/jogos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
component: HomeComponent
  },
  {
    path: 'jogos',
component: JogosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
