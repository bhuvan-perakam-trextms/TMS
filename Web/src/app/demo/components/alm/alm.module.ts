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
import { GridModule } from '@progress/kendo-angular-grid';
import { SidebarModule } from 'primeng/sidebar';
import { AssetsComponent } from './assets/assets.component';
import { AlmRoutingModule } from './alm-routing.modules';

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
           AlmRoutingModule
    ],
    declarations: [AssetsComponent]
})
export class AlmModule { }
