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
                        label: 'Counterparty', icon: 'far fa-object-ungroup',
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
            // {
            //     label: 'Treasury Deals',
            //     items: [
            //         { label: 'Investment Portfolio', icon: 'pi pi-fw pi-bookmark', routerLink: ['/deals/projections'] },
            //         { label: 'Deposits', icon: 'pi pi-fw pi-bookmark', routerLink: ['/deals/deposits'] },
            //         { label: 'Funds', icon: 'pi pi-fw pi-bookmark', routerLink: ['/deals/funds'] }
            //     ]
            // },
            // {
            //     label: 'Asset & Liability Management',
            //     items: [ { label: 'Assets', icon: 'pi pi-fw pi-bookmark', routerLink: ['/assets'] } ]
            // },
            // {
            //     label: 'Forecasting',
            //     items: [
            //         { label: 'Cash Forecast', icon: 'pi pi-fw pi-bookmark', routerLink: ['/forecasting/cash'] }
            //     ]
            // },
            // {
            //     label: 'Invoice Management',
            //     items: [
            //         { label: 'Invoices', icon: 'pi pi-fw pi-bookmark', routerLink: ['/invoicemanagement/invoices'] }
            //     ]
            // },
            {
                label: 'Reporting',
                items: [
                    { label: 'Reports', icon: 'far fa-chart-bar', routerLink: ['/reporting/reports'] },
                    { label: 'Report Builder', icon: 'pi pi-pw pi-chart-line', routerLink: ['/reporting/reportbuilder'] }
                ]
            },
            {
                label: 'Settings',
                items: [
                    {
                        label: 'Dashboard Management', icon: 'fa-regular fa-circle-user', routerLink: ['/settings/dashboardmanagement']
                    },
                ],
            },
            // {
            //     label: 'Treasury Deals',
            //     items: [
            //         {
            //             label: 'Investment Portfolio', icon: 'pi pi-fw pi-bookmark'
            //         },
            //         {
            //             label: 'Deposits', icon: 'pi pi-fw pi-bookmark'
            //         },
            //         {
            //             label: 'Funds', icon: 'pi pi-fw pi-bookmark'
            //         },
            //     ],
            // },
            // {
            //     label: 'Asset & Liability Management',
            //     items: [
            //         {
            //             label: 'Assets', icon: 'pi pi-fw pi-bookmark'
            //         },
                    
            //     ],
            // },
            // {
            //     label: 'Forecasting',
            //     items: [
            //         {
            //             label: 'Cash Forecast', icon: 'pi pi-fw pi-bookmark'
            //         },
                    
            //     ],
            // },
            // {
            //     label: 'Invoice Management',
            //     items: [
            //         {
            //             label: 'Invoices', icon: 'pi pi-fw pi-bookmark'
            //         },
                    
            //     ],
            // },
            {
                label: 'Treasury Deals',
                items: [
                    {
                        label: 'Investment Portfolio', icon: 'fa-regular fa-address-book'
                    },
                    {
                        label: 'Deposits', icon: 'pi pi-fw pi-credit-card'
                    },
                    {
                        label: 'Funds', icon: 'fas fa-dollar-sign'
                    },
                ],
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
                label: 'UI Components',
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/dashboard/uikit/formlayout'] },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/dashboard/uikit/input'] },
                    { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/dashboard/uikit/floatlabel'] },
                    { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/dashboard/uikit/invalidstate'] },
                    { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/dashboard/uikit/button'] },
                    { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/dashboard/uikit/table'] },
                    { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/dashboard/uikit/list'] },
                    { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/dashboard/uikit/tree'] },
                    { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/dashboard/uikit/panel'] },
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/dashboard/uikit/overlay'] },
                    { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/dashboard/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/dashboard/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/dashboard/uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/dashboard/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/dashboard/uikit/charts'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/dashboard/uikit/misc'] }
                ],
                separator: true
            },
            {
                label: 'Prime Blocks',
                items: [
                    { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/dashboard/blocks'], badge: 'NEW' },
                    { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
                ],
                separator: true
            },
            {
                label: 'Utilities',
                items: [
                    { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/dashboard/utilities/icons'] },
                    { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
                ],
                separator: true
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/dashboard/landing']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/dashboard/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/dashboard/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/dashboard/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/dashboard/pages/crud']
                    },
                    {
                        label: 'Timeline',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/dashboard/pages/timeline']
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/dashboard/notfound']
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/dashboard/pages/empty']
                    },
                ],
                separator: true
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
            },
            {
                label: 'Get Started',
                items: [
                    {
                        label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/dashboard/documentation']
                    },
                    {
                        label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/trex-web'], target: '_blank'
                    }
                ],
                separator: true
            }
        ];
    }
}
