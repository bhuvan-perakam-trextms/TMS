// moneymovements.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneymovementsComponent } from './moneymovements.component';
import { MoneymovementsRoutingModule } from './moneymovements-routing.module';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [MoneymovementsComponent],
  imports: [
    CommonModule,
    MoneymovementsRoutingModule,
    GridModule
  ]
})
export class MoneymovementsModule { }
