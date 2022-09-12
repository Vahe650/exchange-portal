import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MatSidenavModule} from '@angular/material/sidenav';
import {AppComponent} from './app.component';
import {LeftMenuComponent} from './view/left-menu/left-menu.component';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ClientPageComponent } from './view/client-page/client-page.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    ClientPageComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
