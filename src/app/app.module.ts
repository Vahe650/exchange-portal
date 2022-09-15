import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ClientPageComponent} from './view/page/client-page/client-page.component';
import {LeftMenuComponent} from './view/left-menu/left-menu.component';
import {RightContentComponent} from './view/right-content/right-content.component';
import {AppRoutingModule} from './app-routing.module';
import { SettingsPageComponent } from './view/page/settings-page/settings-page.component';
import { FoundsToAccountPageComponent } from './view/page/founds-to-account-page/founds-to-account-page.component';
import { RateConfigurationPageComponent } from './view/page/rate-configuration-page/rate-configuration-page.component';
import { PaymentHistoryPageComponent } from './view/page/payment-history-page/payment-history-page.component';
import { SupportPageComponent } from './view/page/support-page/support-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    ClientPageComponent,
    RightContentComponent,
    SettingsPageComponent,
    FoundsToAccountPageComponent,
    RateConfigurationPageComponent,
    PaymentHistoryPageComponent,
    SupportPageComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
