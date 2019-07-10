import { Injectable } from '@angular/core';

const TOKEN_KEY = 'token_key';
const USERNAME_KEY = 'username_key';
const AUTHORITIES_KEY = 'authorities_key';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

    private roles: Array<string> = [];
    constructor(){}

    logOut(){
        window.sessionStorage.clear();
    }

    public saveToken(token: string){
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string{
        return window.sessionStorage.getItem(TOKEN_KEY);
    }

    public saveUsername(username: string){
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    }

    public getUserName(): string {
        return window.sessionStorage.getItem(USERNAME_KEY);
    }

    public saveAuthorities(authorities: string[]){
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }

    public getAuthorities(): string[]{
        this.roles = [];

        if(sessionStorage.getItem(TOKEN_KEY)){
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
                this.roles.push(authority.authority);
            });
        }
        
        return this.roles;
    }
}
