import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

import {   
            SocialLoginModule,
            SocialAuthServiceConfig,
            GoogleLoginProvider,
            GoogleSigninButtonModule, 
            GoogleSigninButtonDirective 
       } from '@abacritt/angularx-social-login';


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,

        
        GoogleSigninButtonModule,
        SocialLoginModule
        
    ],
    declarations: [LoginComponent],
    /*
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
    */
   // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule { }
