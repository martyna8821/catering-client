import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';

@Injectable({ providedIn: 'root' })
export class DietitianGuard implements CanActivate {
    constructor(
        private router: Router,
        private tokenStarageService: TokenStorageService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.tokenStarageService.getToken() != null &&
            this.tokenStarageService.getAuthorities().includes("ROLE_DIETITIAN")){ 
                return true;
        }
        else{
            this.router.navigate(['/home']);
            return false;
        }


    }
}