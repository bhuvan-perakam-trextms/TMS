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
                    { label: 'Dashboard', icon: 'pi pi-pw pi-gauge', routerLink: ['/dashboard/dashboard'] }
                ]
            },
            {
                label: 'Cash Management',
                items: [
                    {
                        label: 'Bank Accounts', icon: 'fas fa-university', routerLink: ['/dashboard/bank-accounts']
                    },
                    {
                        label: 'Cash History', icon: 'fa-solid fa-clock-rotate-left', routerLink: ['/dashboard/cashhistory']
                    },
                    {
                        label: 'Transfers', icon: 'fa-solid fa-arrow-right-arrow-left', routerLink: ['/dashboard/transfers']
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
                        label: 'Investment Portfolio', icon: 'fa-regular fa-address-book', routerLink: ['/invoicemanagement/invoices']
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
                        label: 'Assets', icon: 'far fa-object-group'
                    },
                    
                ],
            },
            {
                label: 'Forecasting',
                items: [
                    {
                        label: 'Cash Forecast', icon: 'far fa-credit-card'
                    },
                    
                ],
            },
            {
                label: 'Invoice Management',
                items: [
                    {
                        label: 'Invoices', icon: 'far fa-file-alt'
                    },
                    
                ],
            },
            {
                label: 'Administration',
                items: [
                    {
                        label: 'User Management', icon: 'far fa-user' , routerLink: ['/settings/usermanagement']
                    },
                    {
                        label: 'Role Management', icon: 'far fa-clock', routerLink: ['/settings/rolemanagement']
                    },
                    // {
                    //     label: 'Role Management', icon: 'far fa-clock'
                    // },
                    {
                        label: 'Permissions', icon: 'pi pi-pw pi-check-circle', routerLink: ['/settings/permissions']
                    },
                    
                ],
            },
            {
                label: 'Settings',
                items: [
                    {
                        label: 'Dashboard Management', icon: 'fa-regular fa-circle-user', routerLink: ['/settings/dashboardmanagement']
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
