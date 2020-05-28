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
import { InOutDataService } from './services/in-out-data.service'

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
    NewUserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    GoogleChartsModule,
    ReactiveFormsModule
  ],
  providers: [
  CardsDataService,
  CanActivateGuard,
  AuthService,
  OnlyLoggedGuard,
  InOutDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
