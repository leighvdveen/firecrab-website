import { FormControl } from '@angular/forms';
import { CountryCode } from './country-code.type';

export type PhoneNumberForm = {
  phoneNumber: FormControl<string>;
  country: FormControl<CountryCode>;
};