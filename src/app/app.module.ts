import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OfficesComponent } from './offices/offices.component';
import { OfficesServices } from './offices/offices.services';
import { OfficeDetailComponent } from './office-detail/office-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    OfficesComponent,
    OfficeDetailComponent,
    TopNavigationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: OfficesComponent },
      { path: 'office/:officeKey', component: OfficeDetailComponent}
    ]),
    HttpClientModule
  ],
  providers: [
    OfficesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
