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
                    { label: 'Dashboard', icon: 'pi pi-pw pi-gauge', routerLink: ['/home/dashboard'] }
                ]
            },
            {
                label: 'Cash Management',
                items: [
                    {
                        label: 'Bank Accounts', icon: 'fas fa-university', routerLink: ['/cashmanagement/bank-accounts']
                    },
                    {
                        label: 'Cash History', icon: 'fa-solid fa-clock-rotate-left', routerLink: ['/cashmanagement/cashhistory']
                    },
                    {
                        label: 'Payments', icon: 'pi pi-fw pi-money-bill',
                        items: [
                            {
                                label: 'Transactions', icon: 'pi pi-fw pi-arrows-h', routerLink: ['/payments/moneymovements']
                            },
                            {
                                label: 'Transfers', icon: 'fa-solid fa-arrow-right-arrow-left', routerLink: ['/cashmanagement/transfers']
                            },
                        ]
                    },
                    {
                        label: 'Approvals', icon: 'pi pi-fw pi-user-plus', routerLink: ['/payments/approvals']
                    }
                ]
            },
            {
                label: 'Counterparty', icon: 'far fa-object-ungroup',
                items: [
                    {
                        label: 'List', icon: 'pi pi-fw pi-book', routerLink: ['/dashboard/counterparty/list']
                    },
                    {
                        label: 'Account', icon: 'pi pi-fw pi-user', routerLink: ['/dashboard/counterparty/account']
                    },
                    {
                        label: 'Rules', icon: 'pi pi-fw pi-shield', routerLink: ['/dashboard/counterparty/rules']
                    },
                ]
            },
            {
                label: 'Treasury Deals',
                items: [
                    {
                        label: 'Investment Portfolio', icon: 'fa-regular fa-address-book', routerLink: ['/deals/projections']
                    },
                    {
                        label: 'Deposits', icon: 'pi pi-fw pi-credit-card', routerLink: ['/deals/deposits']
                    },
                    {
                        label: 'Funds', icon: 'fas fa-dollar-sign', routerLink: ['/deals/funds']
                    },
                ],
            },
            {
                label: 'Reporting',
                items: [
                    { label: 'Reports', icon: 'far fa-chart-bar', routerLink: ['/reporting/reports'] },
                    { label: 'Report Builder', icon: 'pi pi-pw pi-chart-line', routerLink: ['/reporting/reportbuilder/reportbuilder'] }
                ]
            },
            {
                label: 'Asset & Liability Management',
                items: [
                    {
                        label: 'Assets', icon: 'far fa-object-group', routerLink: ['/alm/assets']
                    },

                ],
            },
            {
                label: 'Forecasting',
                items: [
                    {
                        label: 'Cash Forecast', icon: 'far fa-credit-card' , routerLink: ['/forecast/cash']
                    },

                ],
            },
            {
                label: 'Invoice Management',
                items: [
                    {
                        label: 'Invoices', icon: 'far fa-file-alt', routerLink: ['/invoicemanagement/invoices']
                    },

                ],
            },
            {
                label: 'Administration',
                items: [
                    {
                        label: 'User Management', icon: 'far fa-user', routerLink: ['/administration/users']
                    },
                    {
                        label: 'Role Management', icon: 'far fa-clock', routerLink: ['/administration/roles']
                    },
                    {
                        label: 'Permissions', icon: 'pi pi-pw pi-check-circle', routerLink: ['/administration/permissions']
                    },

                ],
            },
            {
                label: 'Settings',
                items: [
                    {
                        label: 'Dashboard Management', icon: 'fa-regular fa-circle-user', routerLink: ['/settings/dashboard']
                    },
                ],
            },
            
        
        ];
    }
}
