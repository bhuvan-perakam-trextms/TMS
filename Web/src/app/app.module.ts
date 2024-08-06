import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { BankService } from './demo/service/bank.service';
import { UserService } from './demo/service/user.service';
import { CashHistoryService } from './demo/service/cashhistory.service';
import { MapToArrayPipe } from './demo/pipes/map-to-array.pipe';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { CurrencyService } from './demo/service/currency.service';
import { CounterpartyService } from './demo/service/counterparty.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TransfersModule } from './demo/components/transfers/transfers.module';
 import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';








@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule, BrowserModule,
        BrowserAnimationsModule,
        GridModule,
        AppRoutingModule,
        PanelModule,
        DividerModule,
        FormsModule,
        ReactiveFormsModule,
        TabViewModule,
        DropdownModule,
        ButtonsModule,
        CalendarModule,
        TransfersModule],
    providers: 
    [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService,
        CustomerService,
        EventService,
        IconService,
        NodeService,
        PhotoService,
        ProductService,
        DropDownListModule,
        CashHistoryService,
        BankService,
        UserService,
        CurrencyService,
        CounterpartyService
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
