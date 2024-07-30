import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoneymovementsComponent } from './moneymovements.component';

const routes: Routes = [
  { path: '', component: MoneymovementsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoneymovementsRoutingModule { }
