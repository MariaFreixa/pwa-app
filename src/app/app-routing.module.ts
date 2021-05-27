import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/country/country.component';

const routes: Routes = [
  { path: '', component: CountriesComponent },
  { path: 'country/:name', component: CountryComponent },
  { path: '**', component: CountriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
