import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rental } from '../models/Rental';
import { ApiServiceService } from '../services/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent implements OnInit {

  rental: Rental;
  rentalList = [];
  SelectedRental: Rental;
  TotalRentals = 0;
  searchRental: Rental;
  SelectedRentCanRent: string;
  deactivated: boolean;
  createdRental: Rental;

  toggle: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.rental = new Rental();
    this.searchRental = new Rental();
    this.createdRental = new Rental();
    if (!sessionStorage.getItem('Username')) {
      this.router.navigateByUrl('/login');
    }
  }

  togglebtn(answer: string) {
    this.toggle = answer;
  }

}
