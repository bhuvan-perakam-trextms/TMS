import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

import { PanelModule } from 'primeng/panel';

import {   
    SocialLoginModule,
    SocialAuthServiceConfig,
    GoogleLoginProvider,
    GoogleSigninButtonModule, 
    GoogleSigninButtonDirective 
} from '@abacritt/angularx-social-login';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'dashboard', component: AppLayoutComponent,
                children: [
                    { path: 'dashboard', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'cashhistory', loadChildren: () => import('./demo/components/cashhistory/cashhistory.module').then(m => m.CashHistoryModule) },
                    { path: 'counterparty', loadChildren: () => import('./demo/components/counterparty/counterparty.module').then(m => m.CounterpartyModule) },
                    { path: 'bank-accounts', loadChildren: () => import('./demo/components/bankaccounts/bankaccounts.module').then(m => m.BankAccountsModule) },
                    { path: 'payments/moneymovements', loadChildren: () => import('./demo/components/payments/moneymovements/moneymovements.module').then(m => m.MoneymovementsModule) },
                    { path: 'payments/approvals', loadChildren: () => import('./demo/components/payments/approvals/approvals.module').then(m => m.ApprovalsModule) },
                    { path: 'transfers', loadChildren: () => import('./demo/components/transfers/transfers.module').then(m => m.TransfersModule) },
                ]
            },
            {
              path: 'deals', component: AppLayoutComponent,
              children: [
                  { path: 'deposits', loadChildren: () => import('./demo/components/deals/deposits/deposits.module').then(m => m.DepositsModule) },
                  { path: 'funds', loadChildren: () => import('./demo/components/deals/funds/funds.module').then(m => m.FundsModule) },
                  { path: 'projections', loadChildren: () => import('./demo/components/deals/projections/projections.module').then(m => m.ProjectionsModule) },
              ]
            },
            {
              path: 'reporting', component: AppLayoutComponent,
              children: [
                  { path: 'reports', loadChildren: () => import('./demo/components/reporting/reports.module').then(m => m.ReportsModule) },
                  { path: 'reportbuilder', loadChildren: () => import('./demo/components/reporting/reports.module').then(m => m.ReportsModule) },
              ]
            },
            { path: '', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' }),
        PanelModule
    ],
    exports: [RouterModule],
    providers:[ 
        {
            provide: 'SocialAuthServiceConfig',
            useValue: 
            {
              autoLogin: false,
              providers: [
                {
                  id: GoogleLoginProvider.PROVIDER_ID,
                  provider: new GoogleLoginProvider(
                    '489265554077-vssoqd79g6lkvccfbft22jol0c9f5a2n.apps.googleusercontent.com'
                  )
                }
              ]
            } as SocialAuthServiceConfig
        },
        GoogleSigninButtonDirective 
    ],
})
export class AppRoutingModule {
}
