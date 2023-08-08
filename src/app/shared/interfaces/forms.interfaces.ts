import { FormControl } from "@angular/forms";

export interface ContactUsForm {
    name: FormControl<string>;
    companyName: FormControl<string>;
    email: FormControl<string>;
    address: FormControl<string>;
    country: FormControl<string>;
    phoneNumber: FormControl<string>;
    additionalInfo: FormControl<string>;
    dateOfConsultation: FormControl<string>;
}