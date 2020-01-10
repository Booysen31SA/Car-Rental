import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Customer } from '../models/Customer';

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
}
