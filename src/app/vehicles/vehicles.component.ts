import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/Vehicle';
import { ApiServiceService } from '../services/api-service.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { Customer } from '../models/Customer';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicle: Vehicle;
  vehicleList = [];
  SelectedVehicle: Vehicle;
  TotalVehicles = 0;
  searchVehicle: Vehicle;
  SelectedVehicleCanRent: string;
  deactivated: boolean;
  createdVehicle: Vehicle;

  SelectedDropDown: string;
  createdSelectedDropDown: string;
  categoryList = [];
  s: string;
  manual_automatic: string;

  constructor(private api: ApiServiceService, private router: Router) { }

  ngOnInit() {
    this.vehicle = new Vehicle();
    this.searchVehicle = new Vehicle();
    this.createdVehicle = new Vehicle();
    if (!sessionStorage.getItem('Username')) {
      this.router.navigateByUrl('/login');
    }
    this.readByVehicleType();
    this.getAllVehicles();
  }

  readByVehicleType() {
    this.api.readByVehicleType(0) .subscribe((data: any) => {
      if (data.success) {
        for (let i = 0; i < data.count; i++) {
          this.categoryList.push(data.results[i].vehicleType);
        }
      }
    });
  }

  onselect(a: any) {
    this.createdVehicle.category = a;
    this.SelectedDropDown = a;
  }

  createOnSelect(a: any) {
    this.createdSelectedDropDown = a;
    this.SelectedVehicle.category = a;
  }
  onSelectVehicle(vehicle: Vehicle) {
    this.SelectedVehicle = vehicle;
    this.createdSelectedDropDown = vehicle.category;
    if (vehicle.disabled === '0') {
      this.deactivated = false;
    } else {
      this.deactivated = true;
    }
    if (vehicle.availableForRent) {
      this.SelectedVehicleCanRent = 'Yes';
    } else {
      this.SelectedVehicleCanRent = 'No';
    }
  }

  autoManSelect(answer: string) {
    this.createdVehicle.manual_automatic = answer;
  }
  hybridClutchless(answer: string) {
    this.createdVehicle.hybrid_clutchless = answer;
  }
  fuel_injection(answer: string) {
    this.createdVehicle.fuel_injection = answer;
  }
  Transaction_Control(answer: string) {
    this.createdVehicle.Transaction_Control = answer;
  }
  getAllVehicles() {
    this.api.getAllVehicles(0) .subscribe((data: any) => {
      if (data.success) {
        this.vehicleList = data.results;
      }
    });
  }

  updateVehicle() {
    Swal.fire({
      title: 'Loading....',
      timer: 3000,
      // tslint:disable-next-line: object-literal-shorthand
      onOpen: function () {
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

    this.api.updateVehicle(this.SelectedVehicle) .subscribe(( data: any) => {

      if (data.success) {
        Swal.close();
        Swal.fire(
          'Success!',
          data.message
        );
      } else {
        Swal.close();
        Swal.fire(
          'Failed!',
           data.message
        );
      }
    });
  }

  deleteVehicle() {
    Swal.fire({
      title: 'Loading....',
      timer: 3000,
      // tslint:disable-next-line: object-literal-shorthand
      onOpen: function () {
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

    this.api.deleteVehicle(this.SelectedVehicle) .subscribe(( data: any) => {
      if (data.success) {
        this.getAllVehicles();
        Swal.close();
        Swal.fire(
          'Success!',
          data.message
        );
      } else {
        Swal.close();
        Swal.fire(
          'Failed!',
           data.message
        );
      }
    });
  }

  createVehicle() {
    Swal.fire({
      title: 'Loading....',
      timer: 3000,
      // tslint:disable-next-line: object-literal-shorthand
      onOpen: function () {
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
    this.api.createVehicle(this.createdVehicle) .subscribe(( data: any) => {
      if (data.success) {
        this.getAllVehicles();
        Swal.close();
        Swal.fire(
          'Success!',
          data.message
        );
        this.createdVehicle.make = null;
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
