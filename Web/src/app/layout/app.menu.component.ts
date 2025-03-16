import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard/dashboard'] }
                ]
            },
            {
                label: 'Cash Management',
                items: [
                    {
                        label: 'Bank Accounts', icon: 'pi pi-fw pi-building', routerLink: ['/dashboard/bank-accounts']
                    },
                    {
                        label: 'Cash History', icon: 'pi pi-fw pi-book', routerLink: ['/dashboard/cashhistory']
                    },
                    {
                        label: 'Transfers', icon: 'pi pi-fw pi-arrow-right-arrow-left', routerLink: ['/dashboard/transfers']
                    },
                    {
                        label: 'Counterparty', icon: 'pi pi-fw pi-dollar',
                        items: [
                            {
                                label: 'List', icon: 'pi pi-fw pi-book', routerLink: ['/dashboard/counterparty/list']
                            },
                            {
                                label: 'Account', icon: 'pi pi-fw pi-book', routerLink: ['/dashboard/counterparty/account']
                            },
                            {
                                label: 'Rules', icon: 'pi pi-fw pi-shield', routerLink: ['/dashboard/counterparty/rules']
                            },
                        ]
                    },
                    
                    {
                        label: 'Payments', icon: 'pi pi-fw pi-money-bill',
                        items: [
                            {
                                label: 'Money Movements', icon: 'pi pi-fw pi-arrows-h', routerLink: ['/dashboard/payments/moneymovements']
                            },
                            {
                                label: 'Approvals', icon: 'pi pi-fw pi-user-plus', routerLink: ['/dashboard/payments/approvals']
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Treasury Deals',
                items: [
                    { label: 'Investment Portfolio', icon: 'pi pi-fw pi-bookmark', routerLink: ['/deals/projections'] },
                    { label: 'Deposits', icon: 'pi pi-fw pi-bookmark', routerLink: ['/deals/deposits'] },
                    { label: 'Funds', icon: 'pi pi-fw pi-bookmark', routerLink: ['/deals/funds'] }
                ]
            },
            {
                label: 'Asset & Liability Management',
                items: [ { label: 'Assets', icon: 'pi pi-fw pi-bookmark', routerLink: ['/assets'] } ]
            },
            {
                label: 'Forecasting',
                items: [
                    { label: 'Cash Forecast', icon: 'pi pi-fw pi-bookmark', routerLink: ['/forecasting/cash'] }
                ]
            },
            {
                label: 'Invoice Management',
                items: [
                    { label: 'Invoices', icon: 'pi pi-fw pi-bookmark', routerLink: ['/invoicemanagement/invoices'] }
                ]
            },
            {
                label: 'Reporting',
                items: [
                    {  label: 'Reports', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/reporting/reports']},
                    { label: 'Report Builder', icon: 'pi pi-fw pi-table', routerLink: ['/reporting/reportbuilder/reportbuilder'] }
                ]
            },
            {
                label: 'Settings',
                items: [
                    {
                        label: 'Dashboard Management', icon: 'pi pi-fw pi-bookmark', routerLink: ['/settings/dashboardmanagement']
                    },
                ],
            },
            {
                label: 'Administration',
                items: [
                    {
                        label: 'User Management', icon: 'pi pi-fw pi-bookmark' , routerLink: ['/settings/usermanagement']
                    },
                    {
                        label: 'Role Management', icon: 'pi pi-fw pi-bookmark', routerLink: ['/settings/rolemanagement']
                    },
                    {
                        label: 'Permissions', icon: 'pi pi-fw pi-bookmark', routerLink: ['/settings/permissions']
                    },
                    
                ],
            },
            {
                label: 'Hierarchy',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                        ]
                    }
                ],
                separator: true
            }
        ];
    }
}
