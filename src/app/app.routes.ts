import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { RojoComponent } from './components/rojo/rojo.component';
import { AmarilloComponent } from './components/amarillo/amarillo.component';
import { NaranjaComponent } from './components/naranja/naranja.component';
import { GChartHistogramaComponent } from './components/g-chart-histograma/g-chart-histograma.component';
import { HistogramaDetalleComponent} from './components/histograma-detalle/histograma-detalle.component';

const APP_ROUTES: Routes = [
{path: 'home', component: HomeComponent},
{path: 'menu', component: MenuComponent},
{path: 'rojo', component: RojoComponent},
{path: 'amarillo', component: AmarilloComponent},
{path: 'naranja', component: NaranjaComponent},
{path: 'histograma', component: GChartHistogramaComponent},
{path: 'histograma-detalles/:row', component:HistogramaDetalleComponent},

{path: '**', pathMatch: 'full', redirectTo: 'home'}

];

export const APP_ROUTING  = RouterModule.forRoot(APP_ROUTES);