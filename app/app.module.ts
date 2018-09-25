import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GetsubsidioComponent } from './getsubsidio/getsubsidio.component';


const appRoutes: Routes = [
    {path:'', component: GetsubsidioComponent, pathMatch: 'full'} ,
];

@NgModule({
  declarations: [
    AppComponent
    ,GetsubsidioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }  ) ,//, { useHash: true }
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
