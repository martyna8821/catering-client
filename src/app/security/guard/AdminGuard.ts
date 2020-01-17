import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
    constructor(
        private router: Router,
        private tokenStarageService: TokenStorageService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.tokenStarageService.getToken() != null &&
            this.tokenStarageService.getAuthorities().includes("ROLE_ADMIN")){ 
                return true;
        }
        else{
            this.router.navigate(['/home']);
            return false;
        }


    }
}