import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { postReducer } from './features/ngrx-store/post-store/post.reducer';
import { provideEffects } from '@ngrx/effects';
import { OperatorEffects } from './features/ngrx-effects/components/operator-list/operator-store/operator.effects';
import { operatorReducer } from './features/ngrx-effects/components/operator-list/operator-store/operator.reducer';
import { appGuard } from './app-config/app.guard';

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
        loadComponent: () => import('./features/ngrx-store/ngrx-store.component').then( m => m.NgrxStoreComponent ),
        // providers: [
        //     provideState({ postItem: postReducer })
        // ]
    },
    {
        path: 'effects',
        loadComponent: () => import('./features/ngrx-effects/ngrx-effects.component').then( m => m.NgrxEffectsComponent )
    },
    {
        path: 'operator',
        loadComponent: () => import('./features/ngrx-effects/components/operator-list/operator-list.component').then( m => m.OperatorListComponent ),
        canActivate: [ appGuard ],
        providers: [
            provideEffects([ OperatorEffects ]),
            provideState('operatorItem', operatorReducer)
        ]
    },
    {
        path: 'router/:id',
        loadComponent: () => import('./features/ngrx-router/ngrx-router.component').then( m => m.NgrxRouterComponent ),
        canActivate: [ appGuard ],
        providers: [
            provideEffects([ OperatorEffects ]),
            provideState('operatorItem', operatorReducer)
        ]
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
