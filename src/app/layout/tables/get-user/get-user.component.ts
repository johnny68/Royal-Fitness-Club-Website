import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserTableService } from '../user.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  user_id = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: UserTableService
  ) { }

  ngOnInit() {
    this.activatedRoute
    .queryParams
    .subscribe ((params) => {
      this.user_id = params.id;
    });
    console.log(this.user_id);
    this.loadUser(this.user_id);
  }

  loadUser(user_id) {
    this.service.getSpecific(user_id)
    .subscribe((response) => {
      console.log(response);
    });
  }

}
