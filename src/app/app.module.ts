import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router} from './app.routes';
import { ParticlesModule } from 'angular-particle';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { RrssComponent } from './rrss/rrss.component';
import { FormComponent } from './form/form.component';
import { ClientesComponent } from './clientes/clientes.component';
import { SliderComponent } from './slider/slider.component';
import { InfoComponent } from './info/info.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BannerComponent,
    ContactoComponent,
    FooterComponent,
    RrssComponent,
    FormComponent,
    ClientesComponent,
    SliderComponent,
    InfoComponent,
    WebComponent,
    MobileComponent,
    LandingpageComponent,
    EcommerceComponent,
  ],
  imports: [
    BrowserModule,
    Router,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
