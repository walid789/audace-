import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SommeComponent } from './somme/somme.component';
import { ServiceComponent } from './service/service.component';
import { ChoisirComponent } from './choisir/choisir.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { Somme2Component } from './somme2/somme2.component';
import { NavComponent } from './nav/nav.component';
import { MaritimComponent } from './maritim/maritim.component';
import { AerienComponent } from './aerien/aerien.component';
import { TerresreComponent } from './terresre/terresre.component';
import { LogistiqueComponent } from './logistique/logistique.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CotationComponent } from './cotation/cotation.component';
import { Cotation1Component } from './cotation1/cotation1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SommeComponent,
    ServiceComponent,
    ChoisirComponent,
    FormComponent,
    FooterComponent,
    Somme2Component,
    NavComponent,
    MaritimComponent,
    AerienComponent,
    TerresreComponent,
    LogistiqueComponent,
    ContactsComponent,
    CotationComponent,
    Cotation1Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
