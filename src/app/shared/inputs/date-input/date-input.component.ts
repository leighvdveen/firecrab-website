import { Platform } from '@angular/cdk/platform';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BaseInputAbstraction } from '../form-control/abstractions/base-input.abstraction';
import { provideInputControl } from '../form-control/providers/input-control.provider';
import { NgOptimizedImage } from '@angular/common';

export class CustomDateAdapter extends NativeDateAdapter {
    override format(date: Date): string {
        const options = { month: 'short' } as Intl.DateTimeFormatOptions;
        const days = date.getDate();
        const months = date.toLocaleString('en-US', options);
        const year = date.getFullYear();
        return `${days} / ${months} / ${year}`;
    }
}

@Component({
    standalone: true,
    selector: 'app-date-input',
    templateUrl: './date-input.component.html',
    styleUrls: ['./date-input.component.scss'],
    imports: [
        ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatIconModule,
        NgOptimizedImage
    ],
    providers: [
        {
            provide: DateAdapter,
            useClass: CustomDateAdapter,
            deps: [MAT_DATE_LOCALE, Platform],
        },
        provideInputControl(DateInputComponent)
    ]
})
export class DateInputComponent extends BaseInputAbstraction<string | Date> {
    private _dateAdapter = inject(DateAdapter);

    public override setValue(value: string) {
        const date = this._dateAdapter.parse(value, 'DD / MMM / YYYY');
        super.setValue(date);
    }
}
