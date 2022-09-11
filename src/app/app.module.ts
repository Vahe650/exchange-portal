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

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
