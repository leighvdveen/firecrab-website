import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-banner-versions',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        NgOptimizedImage
    ],
    templateUrl: './banner-versions.component.html',
    styleUrls: ['./banner-versions.component.scss']
})
export class BannerVersionsComponent {

}
