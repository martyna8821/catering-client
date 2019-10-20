import { Injectable } from '@angular/core';

const TOKEN_KEY = 'token_key';
const USERNAME_KEY = 'username_key';
const AUTHORITIES_KEY = 'authorities_key';
const USERID_KEY = 'userid_key';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

    private roles: Array<string> = [];
    constructor(){}

    logOut(){
        localStorage.clear();
    }

    public saveToken(token: string){
        localStorage.removeItem(TOKEN_KEY);
        localStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string{
        return localStorage.getItem(TOKEN_KEY);
    }

    public saveUsername(username: string){
        localStorage.removeItem(USERNAME_KEY);
        localStorage.setItem(USERNAME_KEY, username);
    }

    public getUserName(): string {
        return localStorage.getItem(USERNAME_KEY);
    }

    public saveUserId(userId: string){
        localStorage.removeItem(USERID_KEY);
        localStorage.setItem(USERID_KEY, userId);
    }

    public getUserId(): string {
        return localStorage.getItem(USERID_KEY);
    }

    public saveAuthorities(authorities: string[]){
        localStorage.removeItem(AUTHORITIES_KEY);
        localStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }

    public getAuthorities(): string[]{
        var roles = [''];

        if(localStorage.getItem(TOKEN_KEY)){
            JSON.parse(localStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
                this.roles.push(authority.authority);
            });
        }
        
        return roles;
    }
}
