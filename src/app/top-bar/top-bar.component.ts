import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  showhamburgerIconRead = true;
  showMenu = true;
  username: string;

  constructor(private router: Router, private apiService: ApiServiceService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('Username');
    if (!sessionStorage.getItem('Username')) {
      this.router.navigateByUrl('/login');
    }
  }

  hamburgerChange() {
    if (this.showhamburgerIconRead) {
      this.showhamburgerIconRead = false;
      this.showMenu = false;
    } else {
      this.showhamburgerIconRead = true;
      this.showMenu = true;
    }
  }

  Logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
