import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientPageComponent} from './view/page/client-page/client-page.component';
import {FoundsToAccountPageComponent} from './view/page/founds-to-account-page/founds-to-account-page.component';
import {PaymentHistoryPageComponent} from './view/page/payment-history-page/payment-history-page.component';
import {RateConfigurationPageComponent} from './view/page/rate-configuration-page/rate-configuration-page.component';
import {SettingsPageComponent} from './view/page/settings-page/settings-page.component';
import {SupportPageComponent} from './view/page/support-page/support-page.component';
import {DialogPageComponent} from './view/page/dialog-page/dialog-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'clients', pathMatch: 'full'},
  {path: 'clients', component: ClientPageComponent},
  {path: 'settings', component: SettingsPageComponent},
  {path: 'payment-history', component: PaymentHistoryPageComponent},
  {path: 'rate-configuration', component: RateConfigurationPageComponent},
  {path: 'founds', component: FoundsToAccountPageComponent},
  {path: 'support', component: SupportPageComponent},
  {path: 'dialog', component: DialogPageComponent},

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
