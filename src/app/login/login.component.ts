import { Component, OnInit } from '@angular/core';
import { Company_Name } from '../models/Compnay_Name';
import { ApiServiceService } from '../services/api-service.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  company: Company_Name;
  password: string;

  constructor(private apiService: ApiServiceService, private router: Router) { }

  ngOnInit() {
    this.company = new Company_Name();
  }

  login() {
    sessionStorage.setItem('Username', this.company.Username);
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

    this.apiService.login(this.company.Username, this.password) .subscribe((data: any ) => {
    this.password = '';
    if (data.success) {
      this.router.navigateByUrl('/homepage');
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
