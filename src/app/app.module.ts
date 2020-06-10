import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Rutas
import {APP_ROUTING} from './app.routes';

// Servicios
import { AuthService } from './services/auth.service';
import { CardsDataService} from './services/cards-data.service';
import { InOutDataService } from './services/in-out-data.service';
import { DetallesOutService } from './services/detalles-out.service';

// Gaurds
import { CanActivateGuard } from './guards/can-activate.guard';
import { OnlyLoggedGuard } from './guards/only-logged.guard';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AmarilloComponent } from './components/amarillo/amarillo.component';
import { RojoComponent } from './components/rojo/rojo.component';
import { MenuComponent } from './components/menu/menu.component';
import { NaranjaComponent } from './components/naranja/naranja.component';
import { CardComponent } from './components/card/card.component';
import { TitleLogoComponent } from './components/title-logo/title-logo.component';
import { HistogramaDetalleComponent } from './components/histograma-detalle/histograma-detalle.component';
import { InOutChartComponent } from './components/in-out-chart/in-out-chart.component';

import { GChartHistogramaComponent } from './components/g-chart-histograma/g-chart-histograma.component';
import { GoogleChartComponent } from './components/google-chart/google-chart.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { LoginComponent } from './components/login/login.component';
import { NewUserFormComponent } from './components/new-user-form/new-user-form.component';
import { DetallesOutComponent } from './components/detalles-out/detalles-out.component';
import { PortabilidadOutComponent } from './components/portabilidad-out/portabilidad-out.component';
import { PortabilidadOutInService } from './services/portabilidad-out-in.service';
import { PortabilidadInComponent } from './components/portabilidad-in/portabilidad-in.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AmarilloComponent,
    RojoComponent,
    MenuComponent,
    NaranjaComponent,
    GoogleChartComponent,
    GChartHistogramaComponent,
    CardComponent,
    UserInfoComponent,
    TopBarComponent,
    TitleLogoComponent,
    HistogramaDetalleComponent,
    LoginComponent,
    InOutChartComponent,
    NewUserFormComponent,
    DetallesOutComponent,
    PortabilidadOutComponent,
    PortabilidadInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    GoogleChartsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
  CardsDataService,
  CanActivateGuard,
  AuthService,
  OnlyLoggedGuard,
  InOutDataService,
  DetallesOutService,
  PortabilidadOutInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
