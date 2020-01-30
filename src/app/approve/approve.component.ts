import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (!sessionStorage.getItem('Username')) {
      this.router.navigateByUrl('/login');
    }
  }

}
