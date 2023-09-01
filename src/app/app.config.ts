import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppReducer } from './app.state';
import { AuthEffects } from './features/ngrx-effects/effects-store/auth.effects';
import { OperatorEffects } from './features/ngrx-effects/components/operator-list/operator-store/operator.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(AppReducer),
    provideEffects([ AuthEffects, OperatorEffects ]),
    provideRouterStore(),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
