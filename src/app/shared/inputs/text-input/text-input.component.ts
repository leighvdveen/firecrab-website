import { Component } from '@angular/core';
import { BaseFormControlAbstraction } from '../form-control/abstractions/base-form-control.abstraction';
import { BaseInputAbstraction } from '../form-control/abstractions/base-input.abstraction';
import { provideInputControl } from '../form-control/providers/input-control.provider';

@Component({
    standalone: true,
    selector: 'app-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.scss'],
    imports: [],
    providers: [
        provideInputControl(TextInputComponent)
    ]
})
export class TextInputComponent extends BaseInputAbstraction implements BaseFormControlAbstraction {
}
