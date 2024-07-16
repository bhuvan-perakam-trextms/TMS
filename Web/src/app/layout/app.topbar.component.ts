import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { UserService } from '../demo/service/user.service';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public layoutService: LayoutService,
        public userService: UserService, 
        private authService: SocialAuthService,
        private router: Router
    ) 
    { 

    }

    signOut(): void 
    {
        this.authService.signOut();
        this.router.navigate(['/']);
    }
}
