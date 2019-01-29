import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class FormService {
    private createUrl = 'http://localhost:3000/user/create';
    private billUrl = 'http://localhost:3000/user/billing/first';

    constructor(private http: Http) { }
    public post(
        email: string,
        name: string,
        aaddhar: string,
        address: string,
        city: string,
        pincode: string,
        mobile: string,
        DOB: string,
        gender: string,
        bloodGroup: string,
        height: string,
        weight: string,
        purpose: string,
        trainingType: string,
        medicalHistory: string,
        previousGym: string,
        pastProtien: string,
        imageFile: any
    ) {
        const formData = new FormData();
        formData.append('user_email', email);
        formData.append('user_name', name);
        formData.append('user_aaddhar', aaddhar);
        formData.append('user_aaddhar', aaddhar);
        formData.append('user_address', address);
        formData.append('user_city', city);
        formData.append('user_pincode', pincode);
        formData.append('user_mobile_number', mobile);
        formData.append('user_date_of_birth', DOB);
        formData.append('user_gender', gender);
        formData.append('user_blood_group', bloodGroup);
        formData.append('user_height', height);
        formData.append('user_weight', weight);
        formData.append('user_purpose', purpose);
        formData.append('user_training_type', trainingType);
        formData.append('user_medical_history', medicalHistory);
        formData.append('user_past_gym', previousGym);
        formData.append('user_past_protien', pastProtien);
        formData.append('photo', imageFile);

        return this.http.post(this.createUrl, formData);

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
    public getWeightLoss() {
        return this.http.get('./assets/weightloss.json');
    }

    public firstBill(
        user_id: Number,
        user_plan: Number,
        user_payment_method: Number,
        due_date: String
    ) {
        const body = { user_id: user_id, user_plan: user_plan, payment_method: user_payment_method, due_date: due_date };
        console.log(body);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({ headers: headers });
        return this.http.post(this.billUrl, body, requestOptions);

    }
}
