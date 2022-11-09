import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterTouristComponent } from './register-tourist/register-tourist.component';
import { ShowTouristComponent } from './show-tourist/show-tourist.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"registertourist",
    component: RegisterTouristComponent
  },
  {
    path:"showtourist",
    component: ShowTouristComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
