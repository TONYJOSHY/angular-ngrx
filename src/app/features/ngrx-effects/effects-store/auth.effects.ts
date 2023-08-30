import { Injectable } from "@angular/core";
import { EffectsService } from "../service/effects.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./effect.action";
import { exhaustMap, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthEffects {
  
    constructor(private actions$: Actions,
                private effectService: EffectsService) { }
  

    login$ = createEffect( () => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap( (action) => {
               return this.effectService.login(action.data).pipe( 
                    map( (response) => loginSuccess({ user: response.data }) ) 
                )
            } )
        )
    } )

}