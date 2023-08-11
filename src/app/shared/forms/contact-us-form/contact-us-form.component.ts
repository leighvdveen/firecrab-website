import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactUsForm } from '../../interfaces/forms.interfaces';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../../inputs/text-input/text-input.component';
import { FormControlComponent } from '../../inputs/form-control/form-control.component';
import { TextareaInputComponent } from '../../inputs/textarea-input/textarea-input.component';
import { DateInputComponent } from '../../inputs/date-input/date-input.component';
import { PhoneNumberInputComponent } from '../../inputs/phone-number-input/phone-number-input.component';
import { ContactUsData } from '../../interfaces/data.interfaces';
import { DateAdapter } from '@angular/material/core';

@Component({
    standalone: true,
    selector: 'app-contact-us-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './contact-us-form.component.html',
    styleUrls: ['./contact-us-form.component.scss'],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TextInputComponent,
        FormControlComponent,
        TextareaInputComponent,
        DateInputComponent,
        PhoneNumberInputComponent
    ]
})
export class ContactUsFormComponent {
    private readonly formBuilder: FormBuilder = inject(FormBuilder);
    private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
    private _dateAdapter = inject(DateAdapter);

    public readonly form: FormGroup<ContactUsForm> = this.getContactUsForm();
    public submitted: boolean = false;

    @Output() submitForm: EventEmitter<ContactUsData> = new EventEmitter();
    @ViewChild(PhoneNumberInputComponent) numberInput: PhoneNumberInputComponent;

    public onSubmit(): void {
        if (this.form.invalid) {
            this.submitted = true;
            return;
        };

        this.submitForm.emit(this.getFormValue());
        this.submitted = false;
        this.clearForm();
    }

    public clearForm(): void {
        Object.keys(this.form.controls).forEach(control => {
            this.form.get(control).setValue('');
            this.form.get(control).markAsPristine();
        })
        this.numberInput.phoneNumberForm.controls.country.setValue({
            logo: 'https://flagcdn.com/fr.svg',
            code: '+33'
        });
        this.numberInput.phoneNumberForm.controls.phoneNumber.setValue('');
        this.cdr.detectChanges();
    }

    private getContactUsForm(): FormGroup<ContactUsForm> {
        return this.formBuilder.group<ContactUsForm>({
            name: this.formBuilder.control('', [Validators.required]),
            companyName: this.formBuilder.control('', [Validators.required]),
            email: this.formBuilder.control('', [Validators.required, Validators.email]),
            address: this.formBuilder.control('', [Validators.required]),
            country: this.formBuilder.control('', [Validators.required]),
            phoneNumber: this.formBuilder.control('', [Validators.required]),
            additionalInfo: this.formBuilder.control(''),
            dateOfConsultation: this.formBuilder.control(''),
        });
    }

    private getFormValue(): ContactUsData {
        const date = this._dateAdapter.parse(this.form.get('dateOfConsultation').value, 'DD / MMM / YYYY');
        return {
            ...this.form.getRawValue(),
            dateOfConsultation: this.formatDate(date)
        }
    }

    private formatDate(date: Date): string {
        if (!date) return '';
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        return `${day}/${month}/${year}`;
    }
}
