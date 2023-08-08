import { ChangeDetectionStrategy, Component, HostListener, OnInit, inject } from '@angular/core';
import { ComponentsRoutes } from '../components.constants';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ComponentsLinksData } from 'src/app/shared/interfaces/data.interfaces';

@Component({
    standalone: true,
    selector: 'app-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [
        CommonModule,
        RouterModule,
        NgOptimizedImage,
    ]
})
export class HeaderComponent implements OnInit {

    public screenWidth: number;
    public isNavbarOpen: boolean = false;
    public componentsRoutes: ComponentsLinksData[] = ComponentsRoutes;

    private readonly router: Router = inject(Router);

    constructor() {
        this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.isNavbarOpen = false;
            }
        });
    }

    ngOnInit() {
        this.screenWidth = window.innerWidth;
    }

    @HostListener('window:resize', ['$event'])
    onWindowResize() {
        this.screenWidth = window.innerWidth;
    }
}
