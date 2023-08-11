import { ApplicationConfig } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, CommonModule, NgxMaskDirective, NgxMaskPipe),
        provideEnvironmentNgxMask(),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
}