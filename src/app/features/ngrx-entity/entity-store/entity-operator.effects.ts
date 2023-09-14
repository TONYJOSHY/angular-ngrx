import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { EMPTY, catchError, exhaustMap, filter, map, of, switchMap, withLatestFrom } from "rxjs"
import { ROUTER_NAVIGATION, RouterNavigatedAction } from "@ngrx/router-store"
import { Store } from "@ngrx/store"

import { AppState } from "src/app/app-config/app.state"
import { EffectsService } from "../../ngrx-effects/service/effects.service"
import { operatorEntityFail, operatorEntityStart, operatorEntitySuccess } from "./entity-operator.actions"
import { getEntityOperator } from "./entity-operator.selector"


@Injectable({
    providedIn: 'root'
})
export class EntityOperatorEffects { 

    constructor(private actions$: Actions,
        private store: Store<AppState>,
        private effectService: EffectsService){}

    operatorsList$ = createEffect( () => {
        return this.actions$.pipe(
            ofType(operatorEntityStart),
            exhaustMap( (action) => {
                return this.effectService.getOperator(action.params).pipe(
                   map( (response) => operatorEntitySuccess({ data: response.data.results }) ),
                   catchError( (err) => of(operatorEntityFail({ message: 'Data loading Failed' })) )
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
            withLatestFrom(this.store.select(getEntityOperator)),
            switchMap( ([id, operatorList ]) => {
                if(!operatorList.length){
                    return this.effectService.getOperatorById(id).pipe(
                        map( (response) => operatorEntitySuccess({ data: [ response.data ] }) )
                    )
                } else {
                    return EMPTY;
                }
            } )
        )
    })

}
