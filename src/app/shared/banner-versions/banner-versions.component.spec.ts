import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerVersionsComponent } from './banner-versions.component';

describe('BannerVersionsComponent', () => {
  let component: BannerVersionsComponent;
  let fixture: ComponentFixture<BannerVersionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BannerVersionsComponent]
    });
    fixture = TestBed.createComponent(BannerVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
