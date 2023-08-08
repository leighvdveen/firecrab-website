import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
    standalone: true,
    selector: 'app-success-modal',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './success-modal.component.html',
    styleUrls: ['./success-modal.component.scss'],
    imports: [
        CommonModule,
        NgOptimizedImage,
        MatDialogModule
    ]
})
export class SuccessModalComponent {

    private readonly dialog: MatDialog = inject(MatDialog);
    
    public hideModal(): void {
        this.dialog.closeAll()
    }
}
