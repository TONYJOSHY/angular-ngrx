import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { EffectsService } from "../../../service/effects.service"
import { operatorFail, operatorStart, operatorSuccess } from "./operator.actions"
import { catchError, exhaustMap, map, of, shareReplay } from "rxjs"


@Injectable({
    providedIn: 'root'
})
export class OperatorEffects { 

    constructor(private actions$: Actions,
        private effectService: EffectsService){}

    operators$ = createEffect( () => {
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
}
