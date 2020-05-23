import { RouterModule, Routes  } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'alumnos', component: AlumnosComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
