import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username: string;
  password: string;

  constructor(private apiService: ApiServiceService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    sessionStorage.setItem('Username', this.Username);
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

    this.apiService.login(this.Username, this.password) .subscribe((data: any ) => {
    this.password = '';
    if (data.success) {
      this.router.navigateByUrl('/dashboard');
      Swal.close();
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
});
  }
}
