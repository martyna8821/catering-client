import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthenticatedGuard implements CanActivate {
    constructor(
        private router: Router,
        private tokenStarageService: TokenStorageService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.tokenStarageService.getToken() != null) {
            return true;
        }
        else{
            this.router.navigate(['/home']);
            return false;
        }


    }
}