import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, HostListener, OnInit, inject } from '@angular/core';
import { ComponentsRoutes } from '../components.constants';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ComponentsLinksData } from 'src/app/shared/interfaces/data.interfaces';
import { MenuOverlayComponent } from './menu-overlay/menu-overlay.component';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

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
    public componentRef: ComponentRef<MenuOverlayComponent>;

    private readonly router: Router = inject(Router);
    private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
    private overlay: Overlay = inject(Overlay);
    private overlayRef: OverlayRef;

    constructor() {
        this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.closeMenu();
            }
        });
    }

    ngOnInit() {
        this.screenWidth = window.innerWidth;
    }

    @HostListener('window:resize', ['$event'])
    onWindowResize() {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth > 700) {
            this.closeMenu();
        }
    }

    public openMenu(): void {
        this.isNavbarOpen = true;
        this.overlayRef = this.overlay.create({
            scrollStrategy: this.overlay.scrollStrategies.block(),
        });
        const portal = new ComponentPortal(MenuOverlayComponent);
        this.componentRef = this.overlayRef.attach(portal);
    }

    public closeMenu(): void {
        this.isNavbarOpen = false;
        if (this.overlayRef) {
            this.overlayRef.detach();
        }
        this.cdr.detectChanges();
    }
}
