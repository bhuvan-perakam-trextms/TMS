import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransfersComponent } from './transfers.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TabStripModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { TransfersRoutingModule } from './transfers-routing.module'; 

@NgModule({
  declarations: [
    TransfersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropDownsModule,
    DateInputsModule,
    ButtonsModule,
    InputsModule,
    TabStripModule,
    GridModule,
    TransfersRoutingModule 
  ],
  exports: [TransfersComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TransfersModule { }
