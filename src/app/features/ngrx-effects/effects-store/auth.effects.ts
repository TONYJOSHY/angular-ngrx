import { Injectable } from "@angular/core";
import { EffectsService } from "../service/effects.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { autoLogin, loginFail, loginStart, loginSuccess, logoutFail, logoutStart, logoutSuccess } from "./effect.action";
import { catchError, exhaustMap, map, mergeMap, of, tap } from "rxjs";
import { Router } from "@angular/router";
import { User } from "../service/login.model";

@Injectable({
    providedIn: 'root'
})
export class AuthEffects {
  
    constructor(private actions$: Actions,
                private router: Router,
                private effectService: EffectsService) { }
  

    login$ = createEffect( () => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap( (action) => {
               return this.effectService.login(action.data).pipe( 
                    map( (response) => {
                        localStorage.setItem('userData', JSON.stringify(response.data))
                        return loginSuccess({ user: response.data })
                    } ),
                    catchError( (err) =>  {
                        return of( loginFail({ message: 'Login Failed' }) )
                    } )
                )
            } )
        )
    } );

    loginRedirect$ = createEffect( () => {
        return this.actions$.pipe(
            ofType(loginSuccess),
            tap( (action) => this.router.navigate(['/operator']) )
        )
    }, { dispatch: false } );

    logout$ = createEffect( () => {
        return this.actions$.pipe(
            ofType(logoutStart),
            exhaustMap( () => {
                return this.effectService.logout().pipe(
                    map( (response) => {
                        localStorage.clear()
                        return logoutSuccess()
                    } ),
                    catchError( (err) => of( logoutFail({ message: 'Logout Failed' }) ) )
                )
            } )
        )
    } );

    logoutRedirect$ = createEffect( () => {
        return this.actions$.pipe(
            ofType(logoutSuccess),
            tap( (action) => this.router.navigate(['/basics']) )
        )
    }, { dispatch: false } )

    autoLogin$ = createEffect( () => {
        return this.actions$.pipe(
            ofType(autoLogin),
            map( () => {
                const user: User | null = JSON.parse(localStorage.getItem('userData') || '')
                return user ? loginSuccess({ user }) : loginFail({ message: 'Login Failed' })
            } )
        )
    } )

}