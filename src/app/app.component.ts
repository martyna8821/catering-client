import { Component } from '@angular/core';
import { TokenStorageService } from './security/service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'catering-client';
  private roles: string[];
  private authority: string;

  constructor(private tokenStorage: TokenStorageService) {}

  ngOnInit(){
    if( this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
    }
  }
}
