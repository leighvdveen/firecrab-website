import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseInputAbstraction } from '../form-control/abstractions/base-input.abstraction';
import { provideInputControl } from '../form-control/providers/input-control.provider';

@Component({
  standalone: true,
  selector: 'app-textarea-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './textarea-input.component.html',
  styleUrls: ['./textarea-input.component.scss'],
  imports: [],
  providers: [
    provideInputControl(TextareaInputComponent)
  ]
})
export class TextareaInputComponent extends BaseInputAbstraction<string> {
  @Input() rows: number = 1;
}