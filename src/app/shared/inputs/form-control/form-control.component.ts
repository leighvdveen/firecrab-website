import { NgIf } from '@angular/common';
import { Component, ContentChild } from '@angular/core';
import { BaseFormControlAbstraction } from './abstractions/base-form-control.abstraction';

@Component({
    selector: 'app-form-control',
    standalone: true,
    imports: [
        NgIf
    ],
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent {
    @ContentChild(BaseFormControlAbstraction)
    protected formControl: BaseFormControlAbstraction;

    public get error(): string {
        return this.formControl.error ?? '';
    }

    public get hasError(): boolean {
        return !!this.formControl.hasError;
    }

    public get label(): string {
        const possibleLabel = this.formControl.label ?? '';
        return possibleLabel ? `${possibleLabel}${this.formControl.isRequired ? ' *' : ''}` : '';
    }

    public get id(): string {
        return this.formControl.id ?? '';
    }

    public get isDisabled(): boolean {
        return !!this.formControl.isDisabled;
    }
}
