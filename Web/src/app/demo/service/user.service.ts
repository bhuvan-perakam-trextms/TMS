import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialUser } from '@abacritt/angularx-social-login';

@Injectable()
export class UserService {

    private loginUser?: SocialUser;

    constructor(private http: HttpClient) {
    }

    setUser(user: SocialUser) {
        this.loginUser = user;
    }

    /** Demo / local sign-in (not SSO); keeps same shape as Google user for UI. */
    setLocalUser(username: string) {
        const u = new SocialUser();
        u.provider = 'LOCAL';
        u.id = username;
        u.email = `${username}@local`;
        u.name = username;
        u.firstName = username;
        u.lastName = '';
        u.photoUrl = '';
        u.authToken = '';
        this.loginUser = u;
    }

    getUser(): SocialUser | undefined {
        return this.loginUser;
    }

    clearUser() {
        this.loginUser = undefined;
    }
}