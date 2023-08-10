import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

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
export class SuccessModalComponent {}
