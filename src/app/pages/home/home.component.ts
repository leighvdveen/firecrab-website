import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HelpStrategies, WorkStrategies } from './home.component.constants';
import { ItemData } from 'src/app/shared/interfaces/data.interfaces';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [
        CommonModule,
        NgOptimizedImage,
        RouterModule
    ]
})
export class HomeComponent {
    public helpStrategies: ItemData[] = HelpStrategies;
    public workStrategies: ItemData[] = WorkStrategies;
}
