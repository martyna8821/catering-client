import { Injectable } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { TokenStorageService } from '../service/token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private tokenStorageService: TokenStorageService) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler){
        let authReq = req;
        const token = this.tokenStorageService.getToken();
        if(token != null){
            authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(authReq);
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];