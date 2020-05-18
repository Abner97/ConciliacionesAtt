import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Rutas
import {APP_ROUTING} from './app.routes';

// Servicios

// Gaurds
// Componentes

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AmarilloComponent } from './components/amarillo/amarillo.component';
import { RojoComponent } from './components/rojo/rojo.component';
import { MenuComponent } from './components/menu/menu.component';
import { NaranjaComponent } from './components/naranja/naranja.component';
import { GoogleChartComponent } from './components/google-chart/google-chart.component';
import { GChartHistogramaComponent } from './components/g-chart-histograma/g-chart-histograma.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { CardComponent } from './components/card/card.component';
import { CardsDataService} from './services/cards-data.service';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TitleLogoComponent } from './components/title-logo/title-logo.component';
import { HistogramaDetalleComponent } from './components/histograma-detalle/histograma-detalle.component';
import { LoginComponent } from './components/login/login.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { AuthService } from './services/auth.service';
import { OnlyLoggedGuard } from './guards/only-logged.guard';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    GoogleChartsModule
  ],
  providers: [
  CardsDataService,
  CanActivateGuard,
  AuthService,
  OnlyLoggedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
