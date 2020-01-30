import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

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

  approve(ID: any) {
    console.log(ID);
  }
  decline(ID: any) {
    console.log(ID);
  }

}
