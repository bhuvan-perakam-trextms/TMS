import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AccountComponent } from './account/account.component';
import { RulesComponent } from './rules/rules.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'list', component: ListComponent },
        { path: 'account', component: AccountComponent },
        { path: 'rules', component: RulesComponent },
    ])],
    exports: [RouterModule]
})
export class counterpartyRoutingModule { }
