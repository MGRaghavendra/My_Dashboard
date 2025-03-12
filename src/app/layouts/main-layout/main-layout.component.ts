import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HomeComponent } from '../../home/home.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { GeoLocationService } from '../../core/services/geo-location.service';
import { Observable } from 'rxjs';
import { WeatherAPIService } from '../../core/services/weather-api.service';
import { WeatherResponse } from '../../core/models/weather.model';
import { DecimalPipe } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-main-layout',
  imports: [
    NzBadgeModule,
    NzBreadCrumbModule,
    NzPopoverModule,
    NzButtonModule,
    NzIconModule,
    NzMenuModule,
    NzLayoutModule,
    RouterModule,
  ],
  templateUrl: `./main-layout.component.html`,
  styleUrl: `./main-layout.component.scss`,
})
export class MainLayoutComponent implements OnInit {
  // isCollapsed = true;
  private authService: AuthService = inject(AuthService);
  public settingpopovervisible: boolean = false;

  ngOnInit(): void {
  }

  settingpopoverChange(value: boolean): void {
    console.log(value);
  }

  logout(): void {
    this.authService.clearSession();
    location.reload();
  }
}
