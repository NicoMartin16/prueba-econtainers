import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonajeComponent } from './components/personaje/personaje.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'personaje', component: PersonajeComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

