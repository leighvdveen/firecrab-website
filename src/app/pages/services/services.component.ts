import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServicePlans, ServicesData } from './services.component.constants';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceData, ServicePlan } from 'src/app/shared/interfaces/data.interfaces';

@Component({
    standalone: true,
    selector: 'app-services',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
    imports: [
        CommonModule,
        NgOptimizedImage,
        RouterModule
    ]
})
export class ServicesComponent {
    public helpStrategies: ServiceData[] = ServicesData;
    public servicePlans: ServicePlan[] = ServicePlans;
}
