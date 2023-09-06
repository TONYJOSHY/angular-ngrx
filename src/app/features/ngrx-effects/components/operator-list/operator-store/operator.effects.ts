import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { EffectsService } from "../../../service/effects.service"
import { operatorFail, operatorStart, operatorSuccess } from "./operator.actions"
import { EMPTY, catchError, exhaustMap, filter, map, of, shareReplay, switchMap, withLatestFrom } from "rxjs"
import { ROUTER_NAVIGATION, RouterNavigatedAction } from "@ngrx/router-store"
import { AppState } from "src/app/app-config/app.state"
import { Store } from "@ngrx/store"
import { getOperator, getOperatorById } from "./operator.selector"


@Injectable({
    providedIn: 'root'
})
export class OperatorEffects { 

    constructor(private actions$: Actions,
        private store: Store<AppState>,
        private effectService: EffectsService){}

    operatorsList$ = createEffect( () => {
        return this.actions$.pipe(
            ofType(operatorStart),
            exhaustMap( (action) => {
                return this.effectService.getOperator(action.params).pipe(
                   // shareReplay(),
                   map( (response) => operatorSuccess({ data: response.data.results }) ),
                   catchError( (err) => of(operatorFail({ message: 'Data loading Failed' })) )
                )
            } )
        )
    } )

    operator$ = createEffect( () => {
        return this.actions$.pipe(
            ofType(ROUTER_NAVIGATION),
            filter( (route: RouterNavigatedAction) => {
                return route.payload.routerState.url.startsWith('/router')
            } ),
            map( (r: any) => {
                return r.payload.routerState['params']['id']
            } ),
            withLatestFrom(this.store.select(getOperator)),
            switchMap( ([id, operatorList ]) => {
                if(!operatorList.length){
                    return this.effectService.getOperatorById(id).pipe(
                        map( (response) => operatorSuccess({ data: [ response.data ] }) )
                    )
                } else {
                    return EMPTY;
                }

            } )
        )
    })

}
