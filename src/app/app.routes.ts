import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'basics', pathMatch: 'prefix'
    },
    {
        path: 'basics', 
        loadComponent: () => import('./features/ngrx-basics/ngrx-basics.component').then( m => m.NgrxBasicsComponent )
    },
    {
        path: 'store',
        loadComponent: () => import('./features/ngrx-store/ngrx-store.component').then( m => m.NgrxStoreComponent )
    },
    {
        path: 'effects',
        loadComponent: () => import('./features/ngrx-effects/ngrx-effects.component').then( m => m.NgrxEffectsComponent )
    },
    {
        path: 'router',
        loadComponent: () => import('./features/ngrx-router/ngrx-router.component').then( m => m.NgrxRouterComponent )
    },
    {
        path: 'entity',
        loadComponent: () => import('./features/ngrx-entity/ngrx-entity.component').then( m => m.NgrxEntityComponent )
    },
    {
        path: 'data',
        loadComponent: () => import('./features/ngrx-data/ngrx-data.component').then( m => m.NgrxDataComponent )
    }
];
