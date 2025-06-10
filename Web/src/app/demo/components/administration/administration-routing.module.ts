import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { RolemanagementComponent } from './rolemanagement/rolemanagement.component';
import { PermissionsComponent } from './permissions/permissions.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'users', component: UsermanagementComponent },
        { path: 'roles', component: RolemanagementComponent },
        { path: 'permissions', component: PermissionsComponent}
    ])],
    exports: [RouterModule]
})
export class AdministrationRoutingModule { }
