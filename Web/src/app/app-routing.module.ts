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
        path: 'home', component: AppLayoutComponent,
        children:
          [
            { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
          ]
      },
      {
        path: 'cashmanagement', component: AppLayoutComponent,
        children:
          [
            { path: '', loadChildren: () => import('./demo/components/cashmanagement/cashmanagement.module').then(m => m.CashManagementModule) },
          ]
      },
      {
        path: 'payments', component: AppLayoutComponent,
        children:
          [
            { path: 'moneymovements', loadChildren: () => import('./demo/components/payments/moneymovements/moneymovements.module').then(m => m.MoneymovementsModule) },
            { path: 'approvals', loadChildren: () => import('./demo/components/payments/approvals/approvals.module').then(m => m.ApprovalsModule) },
          ]
      },
      {
        path: 'counterparty', component: AppLayoutComponent,
        children:
          [
            { path: '', loadChildren: () => import('./demo/components/counterparty/counterparty.module').then(m => m.CounterpartyModule) },
          ]
      },
      {
        path: 'deals', component: AppLayoutComponent,
        children:
          [
            { path: '', loadChildren: () => import('./demo/components/deals/deals.module').then(m => m.DealsModule) },
          ]
      },
      {
        path: 'reporting', component: AppLayoutComponent,
        children:
          [
            { path: '', loadChildren: () => import('./demo/components/reporting/reports.module').then(m => m.ReportsModule) },
          ]
      },
      {
        path: 'invoicemanagement', component: AppLayoutComponent,
        children:
          [
            { path: 'invoices', loadChildren: () => import('./demo/components/invoicemanagement/invoices/invoices.module').then(m => m.InvoicesModule) }
          ]
      },
      {
        path: 'administration', component: AppLayoutComponent,
        children:
          [
            { path: '', loadChildren: () => import('./demo/components/administration/administration.module').then(m => m.AdministrationModule) }
          ]
      },
      {
        path: 'settings', component: AppLayoutComponent,
        children:
          [
            { path: '', loadChildren: () => import('./demo/components/settings/settings.module').then(m => m.SettingsModule) }
          ]
      },
      {
        path: 'forecast', component: AppLayoutComponent,
        children:
          [
            { path: '', loadChildren: () => import('./demo/components/forecasting/forecasting.module').then(m => m.ForecastingModule) }
          ]
      },
      {
        path: 'alm', component: AppLayoutComponent,
        children:
          [
            { path: '', loadChildren: () => import('./demo/components/alm/alm.module').then(m => m.AlmModule) }
          ]
      },
      { path: '', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
      { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
      { path: 'notfound', component: NotfoundComponent },
      { path: '**', redirectTo: 'notfound' }
    ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' }),
    PanelModule
  ],
  exports: [RouterModule],
  providers: [
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
export class AppRoutingModule { }
