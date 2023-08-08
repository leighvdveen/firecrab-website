import { Directive, signal, WritableSignal } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Directive()
export abstract class InputHandlerAccessorAbstraction<T = string> implements ControlValueAccessor {
    private readonly _disabled: WritableSignal<boolean> = signal(false);
    protected _value!: T;

    public set value(value: T) {
        this._value = value;
    }

    public get value(): T {
        return this._value;
    }

    public get disabled(): boolean {
        return this._disabled();
    }

    protected onChange = (_: T) => { };
    protected onTouched = () => { };

    public registerOnChange(fn: (value: T) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    public writeValue(value: T) {
        if (value === null || value === undefined) return;

        this.value = value;
    }

    public setDisabledState(isDisabled: boolean): void {
        this._disabled.set(isDisabled);
    }

    public setValue(value: T) {
        if (this._disabled()) return;

        this.value = value;
        this.onChange(this._value);
        this.onTouched();
    }
}
