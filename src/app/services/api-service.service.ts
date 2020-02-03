import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Customer } from '../models/Customer';
import { Vehicle } from '../models/Vehicle';

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

  // ================================================================
  //                       Users
  // ================================================================
  approve(ID: any, username: any) {
    const body = JSON.stringify({
      Username: username,
      UserID : ID
    });
    return this.http.post(this.url + '/user/Approve', body);
  }

  decline(ID: any, username: any) {
    const body = JSON.stringify({
      Username : username,
      UserID : ID,
    });
    return this.http.post(this.url + '/user/Decline', body);
  }

  // ================================================================
  //                       Customers
  // ================================================================
  getAllCustomers() {
    return this.http.get(this.url + '/customer/getall/0');
  }

  searchViaSurname(surname: string) {
    return this.http.get(this.url + '/customer/searchsurname/' + surname);
  }

  updateCustomer(customer: Customer) {
    const body = JSON.stringify({
      firstName : customer.firstName,
      surName : customer.surName,
      Phone_Number : customer.Phone_Number,
      Address : customer.Address
    });
    return this.http.post(this.url + '/customer/' + customer.custNumber, body);
  }

  deleteCustomer(customer: number) {
    return this.http.delete(this.url + '/customer/delete/' + customer);
  }

  createCustomer(customer: Customer) {
    const body = JSON.stringify({
      firstName : customer.firstName,
      surName : customer.surName,
      Phone_Number : customer.Phone_Number,
      Address : customer.Address
    });
    return this.http.post(this.url + '/customer', body);
  }

  // ================================================================
  //                       Vehicle categories
  // ================================================================
  readByVehicleType($disabled: number) {
    return this.http.get(this.url + '/vehicleCategories/getall/' + $disabled);
  }

  // ================================================================
  //                       Vehicle
  // ================================================================
  getAllVehicles($disabled: number) {
    return this.http.get(this.url + '/vehicle/getAll/' + $disabled);
  }

  updateVehicle(vehicle: Vehicle) {
    const body = JSON.stringify({
      vehNumber : vehicle.vehNumber,
      make: vehicle.make,
      category: vehicle.category
    });
    return this.http.post(this.url + '/vehicle/' + vehicle.vehNumber, body);
  }

  deleteVehicle(vehicle: Vehicle) {
    return this.http.delete(this.url + '/vehicle/delete/' + vehicle.vehNumber);
  }

  createVehicle(vehicle: Vehicle) {
    const body = JSON.stringify({
      make: vehicle.make,
      model: vehicle.model,
      release_date: vehicle.release_date,
      category: vehicle.category,
      rentalPrice: vehicle.rentalPrice,
      zero_Hundred: vehicle.zero_Hundred,
      Transaction_Control: vehicle.Transaction_Control,
      fuel_capacity: vehicle.fuel_capacity,
      fuel_supply: vehicle.fuel_supply,
      fuel_type: vehicle.fuel_type,
      power: vehicle.power,
      Top_speed: vehicle.Top_speed,
      torque: vehicle.torque,
      Aspiration: vehicle.Aspiration,
      capacity: vehicle.capacity,
      cylinders: vehicle.cylinders,
      fuel_injection: vehicle.fuel_injection,
      gearbox: vehicle.gearbox,
      hybrid_clutchless: vehicle.hybrid_clutchless,
      manual_automatic: vehicle.manual_automatic
    });
    return this.http.post(this.url + '/vehicle', body);
  }

  // ================================================================
  //                       Rentals
  // ================================================================
  getAllRentals(type: string) {
    return this.http.get(this.url + '/rental/get' + type);
  }

  createRental(rental: any) {
    const body = JSON.stringify({
      custNumber: rental.custNumber,
      vehNumber: rental.vehNumber
    });
    return this.http.post(this.url + '/rental', body);
  }

  returnedVehicle(rental: any) {
    const body = JSON.stringify({
      custNumber: rental.custNumber,
      vehNumber: rental.vehNumber,
      rentalNumber: rental.rentalNumber
    });
    return this.http.post(this.url + '/rental/' + rental.custNumber, body);
  }

  // ================================================================
  //                       Procedures
  // ================================================================
  SalesPerMonth() {
    return this.http.get(this.url + '/SalesPerMonth');
  }

  Manual_VS_Automatic() {
    return this.http.get(this.url + '/Manual_VS_Automatic');
  }

  Models_Sold() {
    return this.http.get(this.url + '/Models_Sold');
  }
  Outstanding_Vs_Paid() {
    return this.http.get(this.url + '/Outstanding_Vs_Paid');
  }
  car_sales_category() {
    return this.http.get(this.url + '/car_sales_category');
  }
  Get_PendingList() {
    return this.http.get(this.url + '/Get_PendingList');
  }
}
