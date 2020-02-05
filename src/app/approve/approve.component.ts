import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  approveList = [];
  constructor(private router: Router, private api: ApiServiceService) { }

  ngOnInit() {
    if (!sessionStorage.getItem('Username')) {
      this.router.navigateByUrl('/login');
    }
    this.Get_PendingList();
  }

  Get_PendingList() {
    this.api.Get_PendingList() .subscribe(( data: any) => {
      if (data.success) {
        this.approveList = data.results;
      }
    });
  }

  approve(ID: any, Username: any) {
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
    this.api.approve(ID, Username) .subscribe(( data: any ) => {
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
  decline(ID: any, Username: any) {
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

    this.api.decline(ID, Username) .subscribe(( data: any ) => {
      if (data.success) {
        Swal.close();
        this.Get_PendingList();
        Swal.fire(
          'Success!',
          data.message
        );
      } else {
        Swal.close();
        this.Get_PendingList();
        Swal.fire(
          'Failed!',
           data.message
        );
      }
    });
  }

}
