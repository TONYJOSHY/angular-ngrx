import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { counterReducer } from './features/ngrx-basics/basic-store/basic-store.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ firstCounter: counterReducer }),
    provideEffects(),
    provideRouterStore(),
    importProvidersFrom(HttpClientModule),
    provideAnimations()
]
};
