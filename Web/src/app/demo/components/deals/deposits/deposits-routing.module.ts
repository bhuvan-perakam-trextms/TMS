import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DepositsComponent } from './deposits.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DepositsComponent },
    ])],
    exports: [RouterModule]
})
export class DepositsRoutingModule { }
