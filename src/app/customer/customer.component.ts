import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import { ApiServiceService } from '../services/api-service.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer;
  customerList = [];
  SelectedCustomer: Customer;
  TotalCustomers = 0;
  searchCustomer: Customer;
  SelectedCustomerCanRent: string;
  deactivated: boolean;
  createdCustomer: Customer;

  constructor(private api: ApiServiceService, private router: Router) { }

  ngOnInit() {
    this.customer = new Customer();
    this.searchCustomer = new Customer();
    this.createdCustomer = new Customer();
    this. getAllCustomers();
    if (!sessionStorage.getItem('Username')) {
      this.router.navigateByUrl('/login');
    }
  }

  onSelect(customer: Customer) {
    this.SelectedCustomer = customer;

    if (customer.disabled === '0') {
      this.deactivated = false;
    } else {
      this.deactivated = true;
    }
    if (customer.canRent === '0') {
      this.SelectedCustomerCanRent = 'Yes';
    } else {
      this.SelectedCustomerCanRent = 'No';
    }
  }
  getAllCustomers() {
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

    this.api.getAllCustomers() .subscribe((data: any) => {
      this.customerList = data.results;
      this.TotalCustomers = data.count;
      Swal.close();
    });
  }

  searchViaSurname() {
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

    const surname = this.searchCustomer.surName;
    if (surname === ' ') {
      this.getAllCustomers();
      Swal.close();
    } else {
      this.api.searchViaSurname( surname.trim() ) .subscribe(( data: any ) => {
        this.customerList = data.results;
        Swal.close();
      });
    }
  }

  update() {
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

    this.api.updateCustomer(this.SelectedCustomer) .subscribe((data: any) => {

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

  delete() {
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

    this.api.deleteCustomer(this.SelectedCustomer.custNumber) .subscribe((data: any) => {
      this.getAllCustomers();
      if (data.success) {
        this.SelectedCustomer = null;
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

  create() {
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

    this.api.createCustomer(this.createdCustomer) .subscribe((data: any) => {
      if (data.success) {
        Swal.close();
        Swal.fire(
          'Success!',
          data.message
        );
        this.getAllCustomers();
        this.createdCustomer = null;
        this.createdCustomer = new Customer();
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
