import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { RojoComponent } from './components/rojo/rojo.component';
import { AmarilloComponent } from './components/amarillo/amarillo.component';
import { NaranjaComponent } from './components/naranja/naranja.component';
import { GChartHistogramaComponent } from './components/g-chart-histograma/g-chart-histograma.component';
import { HistogramaDetalleComponent} from './components/histograma-detalle/histograma-detalle.component';
import { LoginComponent } from './components/login/login.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { OnlyLoggedGuard } from './guards/only-logged.guard';

const APP_ROUTES: Routes = [
{path: 'home', component: HomeComponent, canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'menu', component: MenuComponent , canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'rojo', component: RojoComponent , canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'amarillo', component: AmarilloComponent , canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'naranja', component: NaranjaComponent , canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'histograma', component: GChartHistogramaComponent , canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'histograma-detalles/:row', component:HistogramaDetalleComponent , canActivate:[CanActivateGuard, OnlyLoggedGuard]},
{path: 'login', component:LoginComponent},


{path: '**', pathMatch: 'full', redirectTo: 'login'}

];

export const APP_ROUTING  = RouterModule.forRoot(APP_ROUTES);