import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateUrl } from "src/app/app-config/app-routerItem.serializer";

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('routerItem')

export const getCurrentRoute = createSelector(getRouterState, (router) => {
    return router.state;
} )