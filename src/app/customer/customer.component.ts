import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';
import { ApiServiceService } from '../services/api-service.service';

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

  constructor(private api: ApiServiceService) { }

  ngOnInit() {
    this.customer = new Customer();
    this.searchCustomer = new Customer();
    this. getAllCustomers();
  }

  onSelect(customer: Customer) {
    this.SelectedCustomer = customer;
  }
  getAllCustomers() {
    this.api.getAllCustomers() .subscribe((data: any) => {
      this.customerList = data.results;
      this.TotalCustomers = data.count;
    });
  }

  searchViaSurname() {

    const surname = this.searchCustomer.surName;
    this.api.searchViaSurname( surname ) .subscribe(( data: any ) => {
      this.customerList = data.results;
      console.log(this.customer);
    });
  }
}