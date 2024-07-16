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
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'cashhistory', loadChildren: () => import('./demo/components/cashhistory/cashhistory.module').then(m => m.CashHistoryModule) },
                    { path: 'counterparty', loadChildren: () => import('./demo/components/counterparty/counterparty.module').then(m => m.CounterpartyModule) },
                    { path: 'bank-accounts', loadChildren: () => import('./demo/components/bankaccounts/bankaccounts.module').then(m => m.BankAccountsModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: '', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
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
