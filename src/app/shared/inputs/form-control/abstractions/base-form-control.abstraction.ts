export abstract class BaseFormControlAbstraction {
    id: string;
    label?: string;
    error?: string | null;
    hasError?: boolean;
    isDisabled?: boolean;
    placeholder?: string;
    isRequired?: boolean;
}