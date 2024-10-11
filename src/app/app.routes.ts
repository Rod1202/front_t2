import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/lista-programador/lista-programador.component')
    },
    {
        path: 'new',
        loadComponent: () => import('./pages/new-programador/new-programador.component')
    }

];
 