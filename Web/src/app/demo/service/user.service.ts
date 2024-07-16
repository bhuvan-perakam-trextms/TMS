import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialUser } from '@abacritt/angularx-social-login';

@Injectable()
export class UserService {

    private loginUser: SocialUser;
    
    constructor(private http: HttpClient) 
    {

    }


    setUser(user: SocialUser)
    {
        this.loginUser = user;
    }

    getUser(): SocialUser
    {
        return this.loginUser;
    }
}