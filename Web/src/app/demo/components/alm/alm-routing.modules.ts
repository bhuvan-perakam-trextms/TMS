import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'assets', component: AssetsComponent },
    ])],
    exports: [RouterModule]
})
export class AlmRoutingModule { }
