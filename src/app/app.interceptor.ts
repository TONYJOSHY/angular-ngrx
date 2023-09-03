import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, exhaustMap, map, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { getUser } from './features/ngrx-effects/effects-store/effect.selector';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private store: Store<AppState>) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.store.select(getUser).pipe(
      take(1),
      exhaustMap( (user) => {
        if(!user) return next.handle(request)
        const modifiedReq = request.clone({
          setHeaders: {
            'User-Id': user.id,
            'Bearer': user.token
          }
        })
        return next.handle(modifiedReq)
      } )
    )
  }
}
