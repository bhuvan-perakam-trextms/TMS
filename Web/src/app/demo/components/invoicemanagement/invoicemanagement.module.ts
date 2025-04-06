import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InvoiceManagementRoutingModule } from './invoicemanagement-routing.module';

import { InvoicesComponent } from './invoices/invoices.component';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InvoiceManagementRoutingModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        SidebarModule
    ],
    declarations: []
})
export class InvoiceManagementModule { }
