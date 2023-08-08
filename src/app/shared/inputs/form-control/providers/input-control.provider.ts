import { forwardRef, Provider, Type } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseFormControlAbstraction } from '../abstractions/base-form-control.abstraction';

export function provideInputControl(component: Type<unknown>): Provider[] {
    return [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => component),
            multi: true,
        },
        {
            provide: BaseFormControlAbstraction,
            useExisting: forwardRef(() => component),
        }
    ];
};
