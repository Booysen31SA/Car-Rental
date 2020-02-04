import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import Swal from 'sweetalert2';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails: User;
  constructor(private router: Router, private api: ApiServiceService) { }

  ngOnInit() {
    if (!sessionStorage.getItem('Username')) {
      this.router.navigateByUrl('/login');
    }
    this.userDetails = new User();
    this.details();
  }

  details() {
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

    this.api.details() .subscribe(( data: any ) => {
      if (data.success) {
        this.userDetails = data.results[0];
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

  update() {
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

    this.api.update(this.userDetails) .subscribe((data: any) => {
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

  }
}
