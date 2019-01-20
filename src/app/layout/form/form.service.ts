import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class FormService {
    private createUrl = 'http://localhost:3000/user/create';

    constructor(private http: Http) { }
    public post(
        email: String,
        name: String,
        aaddhar: String,
        address: String,
        city: Number,
        pincode: Number,
        mobile: Number,
        DOB: String,
        gender: Number,
        bloodGroup: String,
        height: Number,
        weight: Number,
        purpose: Number,
        trainingType: Number,
        medicalHistory: String,
        previousGym: String,
        pastProtien: String
    ) {
        const body = {
            user_email: email,
            user_name: name,
            user_aaddhar: aaddhar,
            user_address: address,
            user_city: city,
            user_pincode: pincode,
            user_mobile_number: mobile,
            user_date_of_birth: DOB,
            user_gender: gender,
            user_blood_group: bloodGroup,
            user_height: height,
            user_weight: weight,
            user_purpose: purpose,
            user_training_type: trainingType,
            user_medical_history: medicalHistory,
            user_past_gym: previousGym,
            user_past_protien: pastProtien
        };

        const headers = new Headers( { 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({ headers: headers });

        return this.http.post(this.createUrl, body, requestOptions);

    }

    public getBloodGroup() {
        return this.http.get('./assets/bloodtypes.json');
    }
    public getTrainingType() {
        return this.http.get('./assets/trainingtype.json');
    }
    public getPurpose() {
        return this.http.get('./assets/purpose.json');
    }
}
