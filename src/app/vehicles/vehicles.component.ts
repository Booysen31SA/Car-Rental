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
  s: string;
  categoryList = [];

  constructor(private api: ApiServiceService, private router: Router) { }

  ngOnInit() {
    this.vehicle = new Vehicle();
    this.searchVehicle = new Vehicle();
    this.createdVehicle = new Vehicle();
    this.SelectedDropDown = 'Please select Category';
    console.log(this.SelectedDropDown);
    if (!sessionStorage.getItem('Username')) {
      this.router.navigateByUrl('/login');
    }
    this.readByVehicleType();
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

}
