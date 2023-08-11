import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-cover',
    standalone: true,
    imports: [
        CommonModule,
        NgOptimizedImage,
        RouterModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cover.component.html',
    styleUrls: ['./cover.component.scss']
})
export class CoverComponent {

}
