import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MonitorsComponent } from './monitors/monitors.component';

export const routes: Routes = [ // Asegúrate de exportar aquí
  { path: '', redirectTo: 'activities', pathMatch: 'full' },
  { path: 'activities', component: AppComponent },
  { path: 'monitors', component: MonitorsComponent },
];
