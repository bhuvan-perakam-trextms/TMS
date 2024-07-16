import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { UserService } from 'src/app/demo/service/user.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;

    constructor(public layoutService: LayoutService, 
                private authService: SocialAuthService,
                private userService: UserService,
                private router: Router) 
    { 
       this.router.navigate(['/dashboard']);
    }

    ngOnInit(): void {
      /* BEGIN - Bypassing authentication for development purposes */
      
      this.router.navigate(['/dashboard']);
      
      /* END - Bypassing authentication for development purposes */


      /*
        this.authService.authState.subscribe((user) => {
          if (user) {
            // Handle the authenticated user details
            console.log(user);
            this.userService.setUser(user);
            // Redirect to the home page
            this.router.navigate(['dashboard']);
          }
        });
      */
     
      }

    signOut(): void 
    {
        this.authService.signOut();
    }
}
