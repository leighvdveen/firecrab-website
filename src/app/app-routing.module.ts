import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent)
    },
    {
        path: 'services',
        loadComponent: () => import('./pages/services/services.component').then(mod => mod.ServicesComponent)
    },
    {
        path: 'about-us',
        loadComponent: () => import('./pages/about-us/about-us.component').then(mod => mod.AboutUsComponent)
    },
    {
        path: 'contact-us',
        loadComponent: () => import('./pages/contact-us/contact-us.component').then(mod => mod.ContactUsComponent)
    },

    //Banners route
    {
        path: 'banners',
        loadComponent: () => import('./shared/banner-versions/banner-versions.component').then(mod => mod.BannerVersionsComponent)
    },

    //Cover route
    {
        path: 'cover',
        loadComponent: () => import('./shared/cover/cover.component').then(mod => mod.CoverComponent)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
