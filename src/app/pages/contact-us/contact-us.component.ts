import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactUsFormComponent } from 'src/app/shared/forms/contact-us-form/contact-us-form.component';
import { ContactUsData } from 'src/app/shared/interfaces/data.interfaces';
import { SuccessModalComponent } from 'src/app/shared/modals/success-modal/success-modal.component';

@Component({
    standalone: true,
    selector: 'app-contact-us',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss'],
    imports: [
        CommonModule,
        NgOptimizedImage,
        MatDialogModule,
        ContactUsFormComponent
    ]
})
export class ContactUsComponent {

    private readonly dialog: MatDialog = inject(MatDialog);

    public openModal(formData: ContactUsData): void {
        console.log(formData);
        this.dialog.open(SuccessModalComponent);
    }
}
