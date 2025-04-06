import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DragDropModule } from '@angular/cdk/drag-drop'; 
import { InvoicesComponent } from './invoices.component';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
    imports: [
           CommonModule,
           FormsModule,
           MenuModule,
           TableModule,
           StyleClassModule,
           PanelMenuModule,
           ButtonModule,
           SidebarModule,
           InvoicesRoutingModule
    ],
    declarations: [InvoicesComponent]
})
export class InvoicesModule { }
