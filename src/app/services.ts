import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class MyServices {

    constructor(
    private router: Router
    ) {}
    goToHome() {
    this.router.navigate(['/home']);
    }
}
