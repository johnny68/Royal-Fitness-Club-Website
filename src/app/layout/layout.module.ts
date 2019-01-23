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
import { GetUserBillingComponent } from './tables/get-user-billing/get-user-billing';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        PageHeaderModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, GetUserComponent, GetUserBillingComponent],
    exports: [PageHeaderModule]
})
export class LayoutModule {}
