import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsLinksData } from 'src/app/shared/interfaces/data.interfaces';
import { ComponentsRoutes } from '../../components.constants';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-menu-overlay',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule
    ],
    templateUrl: './menu-overlay.component.html',
    styleUrls: ['./menu-overlay.component.scss']
})
export class MenuOverlayComponent {
    public componentsRoutes: ComponentsLinksData[] = ComponentsRoutes;
}
