import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OfferComponent } from './offer/offer.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { CarousalComponent } from './carousal/carousal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PackagesComponent } from './packages/packages.component';
import { PackagedetailComponent } from './packagedetail/packagedetail.component';
import { BookingdetailComponent } from './bookingdetail/bookingdetail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OfferComponent,
    AboutComponent,
    FooterComponent,
    CarousalComponent,
    PackagesComponent,
    PackagedetailComponent,
    BookingdetailComponent,
    ContactFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
