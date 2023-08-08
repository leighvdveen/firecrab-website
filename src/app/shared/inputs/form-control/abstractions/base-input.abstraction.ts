import { Directive, inject, Injector, Input, OnInit } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { BaseFormControlAbstraction } from './base-form-control.abstraction';
import { InputHandlerAccessorAbstraction } from './input-handler-accessor.abstraction';
import { ErrorsMessage } from './dase-input.constants';
import { ErrorsMessageData } from 'src/app/shared/interfaces/data.interfaces';

@Directive({})
export abstract class BaseInputAbstraction<T = string> extends InputHandlerAccessorAbstraction<T> implements OnInit, BaseFormControlAbstraction {

    @Input() label: string = '';
    @Input() placeholder: string = '';

    private _injector: Injector = inject(Injector);
    private _ngControl!: NgControl;

    public ngOnInit(): void {
        this.defineNgControl();
    }

    set ngControl(ngControl: NgControl) {
        this._ngControl = ngControl;
    }

    public get hasError(): boolean {
        return this._ngControl.invalid && this._ngControl.dirty;
    }

    public get isDisabled(): boolean {
        return this.disabled;
    }

    public get error(): string {
        const errors: ErrorsMessageData = ErrorsMessage;
        return errors[Object.keys(this._ngControl.control.errors)[0]];
    };

    public get isRequired(): boolean {
        return this._ngControl.control.hasValidator(Validators.required);
    }

    public get id(): string {
        return this._ngControl.name.toString();
    }

    private defineNgControl(): void {
        this._ngControl = this._injector.get(NgControl);
    }
}
