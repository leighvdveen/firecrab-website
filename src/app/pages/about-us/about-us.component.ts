import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-about-us',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss'],
    imports: [
        CommonModule,
        RouterModule,
        NgOptimizedImage,
    ]
})
export class AboutUsComponent {

}
