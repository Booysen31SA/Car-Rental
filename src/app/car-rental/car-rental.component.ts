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

  constructor(private router: Router, private api: ApiServiceService) { }

  ngOnInit() {
    this.rental = new Rental();
    this.searchRental = new Rental();
    this.createdRental = new Rental();
    if (!sessionStorage.getItem('Username')) {
      this.router.navigateByUrl('/login');
    }
  }

  OnSelect(rentalList: Rental) {
    this.SelectedRental = rentalList;
    if (rentalList.dateReturned != null) {
      this.deactivated = true;
    } else {
      this.deactivated = false;
    }
  }

  cleared() {
  }

  togglebtn(answer: string) {
    this.rentalList = [];
    this.SelectedRental = null;
    Swal.fire({
      title: 'Loading....',
      timer: 3000,
      // tslint:disable-next-line: object-literal-shorthand
      onOpen: function() {
        Swal.showLoading();
      }
    }).then(
      // tslint:disable-next-line: only-arrow-functions
      function() {},
      // handling the promise rejection
      function failed(isLoggIn) {
        if (isLoggIn === true) {
          console.log('I was closed by the timer');
        }
      }
    );
    this.toggle = answer;
    this.api.getAllRentals(this.toggle.replace(/\s/g, '')) .subscribe((data: any) => {
      if (data.success) {
        this.rentalList = data.results;
        this.TotalRentals = data.count;
        Swal.close();
      } else {
        Swal.close();
        Swal.fire(
          'Failed!',
          data.message
        );
      }
    });
  }
}
