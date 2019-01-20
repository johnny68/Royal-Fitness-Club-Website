import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserTableService } from '../tables/user.service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { FormService } from './form.service';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {

    username: String;
    useremail: String;
    aadhaar: String;
    address: String;
    pincode: Number;
    mobileNumber: Number;
    gender;
    bloodgroup;
    height: Number;
    weight: Number;
    purpose: Number;
    trainingtype: Number;
    medicalHistory: String;
    previousGym: String;
    pastProtien: String;
    private citynumber;
    private trainingNumber;
    private purposeNumber;
    private bloodGroup;
    datemodel;

    // json variables for loops
    cities: any[];
    city: any[];
    trainingtypes: any[];
    singleType: any[];
    purposes: any[];
    singlePurpose: any[];
    bloodTypes: any[];
    bloodtype: any[];


    constructor(private service: UserTableService,
        private formService: FormService) {}

    ngOnInit() {
        this.loadCities();
        this.loadTrainingTypes();
        this.loadPurposes();
        this.loadBloodGroups();
    }
    getGender(event) {
        this.gender = event;
    }

    loadTrainingTypes() {
        this.formService.getTrainingType()
        .subscribe ((respose) => {
            const body = respose.json();
            this.trainingtypes = body.data;
        });
    }

    loadPurposes() {
        this.formService.getPurpose()
        .subscribe((response) => {
            const body = response.json();
            this.purposes = body.data;
        });
    }

    loadBloodGroups() {
        this.formService.getBloodGroup()
        .subscribe((response) => {
            console.log(response);
            const body = response.json();
            this.bloodTypes = body.bloodtype;
            console.log(this.bloodTypes);
        });
    }

    loadCities() {
        this.service.getCities()
        .subscribe((response) => {
            const body = response.json();
            this.cities = body.data;
        });
    }
    bloodSelectedValue(event): void {
        this.bloodGroup = event;
        console.log(this.bloodGroup);
    }

    trainingSelectedValue(event): void {
        this.trainingNumber = parseInt( event, 10);
        console.log(this.trainingNumber);
    }

    purposeSelectedValue(event): void {
        this.purposeNumber = parseInt(event, 10);
        console.log(this.purposeNumber);
    }

    citySelectedValue(event): void {
        this.citynumber = parseInt(event , 10);
        console.log(this.citynumber);
        // this.getState(event);
    }

    updateBody() {
        console.log('here');
    }

    onSave() {
        console.log(`Name: ${this.username} Email: ${this.useremail} Addhar: ${this.aadhaar} address:${this.address}`);


        //const newDate = ` ${this.datemodel.day}-${this.datemodel.month}-${this.datemodel.year}`;
        //this.bloodGroup;
        this.sendData();
        // this.getState (this.city);
    }

    sendData() {
        // this.formService.post(this.username)
    }

}
