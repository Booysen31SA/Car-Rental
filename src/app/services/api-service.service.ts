import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url = environment.apiUrl;
  httpOptions: any;
  showMenu = true;

  constructor(private http: HttpClient) {}
  // ================================================================
  //                       login Screen
  // ================================================================

  login(username: string, password: string) {
    const body = JSON.stringify({	Username: username,
                                  Password: password,
                                });
    // tslint:disable-next-line: variable-name
    const full_URL = this.url + '/login';
    return this.http.post(full_URL, body);
  }

  // ================================================================
  //                       Show Menu
  // ================================================================
  showMenuDisplay() {
    console.log('Show' , this.showMenu);
    if (this.showMenu) {
      this.showMenu = false;

      return this.showMenu;
    } else {
      this.showMenu = true;
      return this.showMenu;
    }
  }
}
