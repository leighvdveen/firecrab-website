import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsRoutes, ContactsData } from '../components.constants';
import { ComponentsLinksData, FooterContactsData } from 'src/app/shared/interfaces/data.interfaces';

@Component({
    standalone: true,
    selector: 'app-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [
        CommonModule,
        RouterModule,
        NgOptimizedImage
    ]
})
export class FooterComponent {
    public componentsRoutes: ComponentsLinksData[] = ComponentsRoutes;
    public contactsData: FooterContactsData[] = ContactsData;
}
