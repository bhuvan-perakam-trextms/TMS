import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { UserService } from 'src/app/demo/service/user.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep {
            .layout-topbar {
                background-color: #0B6183;
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 1000;
            }

            .layout-footer {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                padding: 1rem;
                text-align: center;
                background-color: #f5f8f9;
                font-size: 12px;
                color: #666;
            }

            .surface-ground {
                background-color: #f5f8f9;
                min-height: 100vh;
                padding: 2rem;
            }

            .surface-card {
                background-color: #ffffff;
                box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
            }

            .text-900 {
                color: #324533;
            }

            .text-600 {
                color: #666;
            }

            asl-google-signin-button {
                margin: 1rem 0;
            }

            .layout-topbar {
                background-color: #0B6183;
            }
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    username = '';

    password = '';

    loginError = '';

    constructor(public layoutService: LayoutService, 
                private authService: SocialAuthService,
                private userService: UserService,
                private router: Router) 
    { }

    ngOnInit(): void {
        this.authService.authState.subscribe((user) => {
            if (user) {
                // Handle the authenticated user details
                console.log('User logged in:', user);
                this.userService.setUser(user);
                // Redirect to the landing page
                console.log('Attempting to navigate to landing page...');
                this.router.navigateByUrl('/landing').then(success => {
                    console.log('Navigation result:', success);
                }).catch(error => {
                    console.error('Navigation error:', error);
                });
            }
        });
    }

    signOut(): void 
    {
        this.authService.signOut();
    }

    onPasswordLogin(): void {
        this.loginError = '';
        if (this.username === 'admin' && this.password === 'admin') {
            this.userService.setLocalUser(this.username);
            this.router.navigateByUrl('/landing');
            return;
        }
        this.loginError = 'Invalid username or password.';
    }
}
