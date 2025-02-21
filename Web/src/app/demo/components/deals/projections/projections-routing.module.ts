import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectionsComponent } from './projections.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProjectionsComponent },
    ])],
    exports: [RouterModule]
})
export class ProjectionsRoutingModule { }
