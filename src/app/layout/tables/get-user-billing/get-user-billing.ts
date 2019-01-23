import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-timeline',
    templateUrl: './get-user-billing.html',
    styleUrls: ['./get-user-billing.css'],
    animations: [routerTransition()]
})
export class GetUserBillingComponent implements OnInit {
    user_id;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}
    ngOnInit() {
        this.activatedRoute
        .queryParams
        .subscribe((params) => {
            this.user_id = params.id;
        });
    }
}
