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

import { ApprovalService } from './demo/service/approval.service';
import { BankService } from './demo/service/bank.service';
import { UserService } from './demo/service/user.service';
import { CashHistoryService } from './demo/service/cashhistory.service';
import { MapToArrayPipe } from './demo/pipes/map-to-array.pipe';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';




@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule, BrowserModule,
        BrowserAnimationsModule,
        GridModule,
        AppRoutingModule,
        FormsModule,
        DropDownListModule],
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
        ApprovalService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
