import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (!sessionStorage.getItem('Username')) {
      this.router.navigateByUrl('/login');
    }
  }

}
