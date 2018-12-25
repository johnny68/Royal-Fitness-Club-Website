import { LoginService } from './login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClassesComponent } from './classes/classes.component';
import { PlansComponent } from './plans/plans.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { HomeComponent } from './home/home.component';
import { MyServices } from './services';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'classes', component: ClassesComponent},
  { path: 'plans', component: PlansComponent},
  { path: 'benefits', component: BenefitsComponent},
  { path: 'home', component: HomeComponent},
  { path: '**', component: PageNotFoundComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ClassesComponent,
    PlansComponent,
    BenefitsComponent,
    HomeComponent
  ],
  imports: [
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [
    LoginService,
    MyServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
