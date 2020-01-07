import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer;
  customerList = [];
  SelectedCustomer: Customer;

  constructor() { }

  ngOnInit() {
    this.customer = new Customer();
    this.SelectedCustomer = new Customer();
  }

  onSelect(customer: Customer) {

  }

}
