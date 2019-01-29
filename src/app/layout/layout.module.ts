import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { GetUserComponent } from './tables/get-user/get-user.component';
import { PageHeaderModule } from '../shared';
import { GetUserBillingComponent } from './form/get-user-billing/get-user-billing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetUserDietComponent } from './form/get-user-diet/get-user-diet.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [LayoutComponent,
        SidebarComponent,
        HeaderComponent,
        GetUserComponent,
        GetUserBillingComponent,
        GetUserDietComponent
    ],
    exports: [PageHeaderModule]
})
export class LayoutModule { }
