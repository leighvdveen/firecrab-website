import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { debounceTime, distinctUntilChanged, first, map } from 'rxjs';
import { BaseInputAbstraction } from '../form-control/abstractions/base-input.abstraction';
import { provideInputControl } from '../form-control/providers/input-control.provider';
import { CountryCode } from './types/country-code.type';
import { PhoneNumberForm } from './types/phone-number-form.type';
import { ContactUsService } from '../../_services/contact-us.service';

@Component({
    standalone: true,
    selector: 'app-phone-number-input',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './phone-number-input.component.html',
    styleUrls: ['./phone-number-input.component.scss'],
    imports: [
        CommonModule,
        NgxMaskDirective,
        NgxMaskPipe,
        ReactiveFormsModule
    ],
    providers: [
        provideInputControl(PhoneNumberInputComponent)
    ]
})
export class PhoneNumberInputComponent extends BaseInputAbstraction implements OnInit {

    private readonly formBuilder: FormBuilder = inject(FormBuilder);
    private readonly contactUsService: ContactUsService = inject(ContactUsService);
    private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
    public countries: any[];
    public showCountriesCode: boolean = false;

    public readonly phoneNumberForm: FormGroup<PhoneNumberForm> = this.getContactForm();
    @ViewChild('phoneCodeContainer') phoneCodeContainer: ElementRef;

    constructor() {
        super();
        this.listenNumberChange();
        document.addEventListener('click', this.offClickHandler.bind(this));
    }

    public override ngOnInit(): void {
        super.ngOnInit();

        this.contactUsService.getCountriesData().pipe(first()).subscribe(data => {
            this.countries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        })
    }

    public onSelectCode({ idd, flags: { svg } }): void {
        this.showCountriesCode = false;
        const countryCode = this.generateCountryCode(idd);

        this.phoneNumberForm.controls.country.setValue({
            logo: svg,
            code: countryCode
        });
    }

    public get countryCode(): CountryCode {
        return this.phoneNumberForm.controls.country.value;
    }

    private listenNumberChange(): void {
        this.phoneNumberForm.valueChanges
            .pipe(
                distinctUntilChanged(),
                debounceTime(300),
                map(({ phoneNumber, country: { code } }) => `${code}${phoneNumber}`),
                takeUntilDestroyed(),
            )
            .subscribe((value) => {
                this.setValue(value);
            });
    }

    private generateCountryCode(country: {
        root: `+${string}`;
        suffixes: string[];
    }): CountryCode['code'] {
        return `${country.root}${country.suffixes[0]}`;
    }

    private offClickHandler(event: any): void {
        if (!this.phoneCodeContainer.nativeElement.contains(event.target)) {
            this.showCountriesCode = false;
            this.cdr.detectChanges();
        }
    }

    private getContactForm(): FormGroup<PhoneNumberForm> {
        return this.formBuilder.group<PhoneNumberForm>({
            phoneNumber: this.formBuilder.control(''),
            country: this.formBuilder.control({
                logo: 'https://flagcdn.com/fr.svg',
                code: '+33'
            })
        });
    }
}
