import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { RojoComponent } from './components/rojo/rojo.component';
import { AmarilloComponent } from './components/amarillo/amarillo.component';
import { NaranjaComponent } from './components/naranja/naranja.component';
import { GChartHistogramaComponent } from './components/g-chart-histograma/g-chart-histograma.component';
import { HistogramaDetalleComponent} from './components/histograma-detalle/histograma-detalle.component';
import { InOutChartComponent} from './components/in-out-chart/in-out-chart.component';
import { DetallesOutComponent} from './components/detalles-out/detalles-out.component';
import { LoginComponent } from './components/login/login.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { OnlyLoggedGuard } from './guards/only-logged.guard';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { PortabilidadOutComponent } from './components/portabilidad-out/portabilidad-out.component';
import { PortabilidadInComponent } from './components/portabilidad-in/portabilidad-in.component';
import { DetallesGeneralComponent } from './components/detalles-general/detalles-general.component';

const APP_ROUTES: Routes = [
{path: 'home', component: HomeComponent, canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'portabilidad-out', component:PortabilidadOutComponent, canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'portabilidad-in', component:PortabilidadInComponent, canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'menu', component: MenuComponent , canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'azul', component: RojoComponent , canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'verde', component: AmarilloComponent , canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'naranja', component: NaranjaComponent , canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'histograma', component: GChartHistogramaComponent , canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'inout', component: InOutChartComponent , canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'detalles-out', component: DetallesOutComponent , canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'histograma-detalles/:row', component:HistogramaDetalleComponent , canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'detalles-general/:data', component:DetallesGeneralComponent , canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'login', component:LoginComponent, canActivate:[IsLoggedInGuard]},


{path: '**', pathMatch: 'full', redirectTo: 'login'}

];

export const APP_ROUTING  = RouterModule.forRoot(APP_ROUTES);